import React, { useState } from "react";

export default function Login() {
    const [user, setUser] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${user.email}\nPassword: ${user.password}`);
        setUser({ email: "", password: "" });
    };

    return (
        <div className="Login">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="emailInput">
                    Email:
                    <input
                        id="emailInput"
                        type="email"
                        autoComplete="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label htmlFor="passwordInput">
                    Password:
                    <input
                        id="passwordInput"
                        type="password"
                        autoComplete="current-password"
                        name="password"
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label>
                    <button>Login</button>
                </label>
            </form>
        </div>
    );
}
