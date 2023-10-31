import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginError, setLoginError] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        // Reset errors
        setEmailError('')
        setPasswordError('')
        setLoginError('')

        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password,
            })
            // Handle the response from the server
            console.log(response.data)

            if (response.data.user) {
                // Redirect or set authentication state in your app
                console.log('Login successful')
            }
        } catch (error) {
            if (error.response) {
                // Server responded with an error status (4xx or 5xx)
                const { data } = error.response

                if (data.errors) {
                    setEmailError(data.errors.email || '')
                    setPasswordError(data.errors.password || '')
                } else if (data.error) {
                    setLoginError(data.error)
                }
            } else {
                // An error occurred in making the request (e.g., network error)
                console.error('Network error:', error.message)
            }
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
                <div className="login error">{loginError}</div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
