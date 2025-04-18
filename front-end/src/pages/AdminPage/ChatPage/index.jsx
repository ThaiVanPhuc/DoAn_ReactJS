import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const AdminChat = () => {
    const [messages, setMessages] = useState([]);
    const [adminMessage, setAdminMessage] = useState("");

    useEffect(() => {
        socket.on("user_message", (msg) => {
            setMessages(prev => [...prev, { sender: "User", content: msg }]);
        });

        return () => {
            socket.off("user_message");
        };
    }, []);

    const sendToUser = () => {
        if (!adminMessage.trim()) return;
        socket.emit("admin_message", adminMessage);
        setMessages(prev => [...prev, { sender: "Admin", content: adminMessage }]);
        setAdminMessage("");
    };

    return (
        <div style={{ padding: "1rem" }}>
            <h2>👨‍💼 Admin Chat</h2>
            <div style={{ border: "1px solid #ccc", padding: "1rem", height: "300px", overflowY: "scroll" }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{ textAlign: msg.sender === "Admin" ? "right" : "left" }}>
                        <strong>{msg.sender}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <textarea
                value={adminMessage}
                onChange={(e) => setAdminMessage(e.target.value)}
                placeholder="Nhập tin nhắn..."
                rows={3}
            />
            <br />
            <button onClick={sendToUser}>Gửi cho người dùng</button>
        </div>
    );
};

export default AdminChat;
