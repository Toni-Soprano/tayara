import React, { useState } from 'react'
import('../Styles/Login.css')
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        // Reset errors
        setEmailError('')
        setPasswordError('')

        try {
            const res = await fetch('/signup', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            })
            const data = await res.json()
            console.log(data)

            if (data.errors) {
                setEmailError(data.errors.email)
                setPasswordError(data.errors.password)
            }

            if (data.user) {
                // Redirect or handle success
                // You can use React Router for navigation
                // Example: history.push('/'); // assuming you have access to the history object
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <div className="email error">{emailError}</div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <div className="password error">{passwordError}</div>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Signup
