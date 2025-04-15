import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("", {

            })
            localStorage.setItem('', res.data.token)
        } catch (error) {

        }
    }
}