import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:5000/api/login", {
                email,
                password
            })
            console.log(data.data);
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", res.data.user)
            alert("login succesfully")
        } catch (error) {
            alert("login fail")
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.password)} placeholder="password" />
            <button type="submit">Login</button>
        </form>
    )
}