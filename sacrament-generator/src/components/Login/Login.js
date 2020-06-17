import React, { useState } from "react";

export default function Login() {
    const [user, setUser] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${user.username}\nPassword: ${user.password}`);
        setUser({ username: "", password: "" });
    };

    return (
        <div className="Login">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
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
