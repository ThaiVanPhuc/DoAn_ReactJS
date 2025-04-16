import React, { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import * as userServices from "../../../services/userServices";

const AdminUserPage = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
        role: "user",
    });
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const fetchUsers = async () => {
        try {
            const data = await userServices.getAllUsers();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await userServices.deleteUser(id);
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleEdit = (user) => {
        setFormData({
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        });
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            if (formData.id) {
                await userServices.updateUser(formData.id, formData);
            } else {
                await userServices.createUser(formData);
            }
            setFormData({
                id: "",
                username: "",
                email: "",
                password: "",
                role: "user",
            });
            setShowModal(false);
            fetchUsers();
        } catch (error) {
            console.error("Error saving user:", error);
            setError("Lỗi khi lưu người dùng. Vui lòng kiểm tra lại.");
        }
    };

    const handleAddUserClick = () => {
        setFormData({
            id: "",
            username: "",
            email: "",
            password: "",
            role: "user",
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            id: "",
            username: "",
            email: "",
            password: "",
            role: "user",
        });
        setError("");
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>User Management</h1>
            <button className={styles.addBtn} onClick={handleAddUserClick}>Thêm User</button>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className={styles.editBtn} onClick={() => handleEdit(user)}>Edit</button>
                                <button className={styles.deleteBtn} onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>{formData.id ? "Cập nhật người dùng" : "Thêm người dùng"}</h2>
                        {error && <p className={styles.error}>{error}</p>}

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            {!formData.id && (
                                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                            )}
                            <select name="role" value={formData.role} onChange={handleChange}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <div className={styles.modalButtons}>
                                <button type="submit" className={styles.saveBtn}>{formData.id ? "Update" : "Add"}</button>
                                <button type="button" className={styles.cancelBtn} onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminUserPage;
