import styles from "./Users.module.scss";
import { useState } from "react";
import * as userServices from "../../../services/userServices";

const AdminUserPage = () => {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
        role: "user"
    })
    const [error, setError] = useState("")
    const [showModal, setShowModal] = useState(false)

    const fetchData = async () => {
        try {
            const data = await userServices.getAllUsers()
            setUsers(data)
        } catch (error) {
            console.error("Error fetching users", error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await userServices.deleteUser(id)
            fetchData()
        } catch (error) {
            console.error(error);
        }
    }

    const handleEdit = (user) => {
        setFormData({
            id: user._id,
            username: user.username,
            email: user.email,
            password: "",
            role: user.role
        })
        setShowModal(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

}