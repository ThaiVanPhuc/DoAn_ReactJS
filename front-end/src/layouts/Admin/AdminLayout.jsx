import React from "react";

const AdminLayout = ({ children }) => {
    return (
        <div style={{ minHeight: "100vh", background: "#f6f8fa", padding: "20px" }}>
            {children}
        </div>
    );
};

export default AdminLayout;
