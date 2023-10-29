import React, { useState } from 'react'

import axios from 'axios'
import('../Styles/Login.css')

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailError = document.querySelector('.email.error')
    const passwordError = document.querySelector('.password.error')

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const response = await axios.post('/login', { email, password })
            // Handle the response from the server
            console.log(response.data)
            // Redirect or set authentication state in your app
        } catch (error) {
            // Handle errors
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <div className="email error">{emailError}</div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className="password error">{passwordError}</div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
