import React, { useState, useEffect } from "react";
import * as Yup from "yup"; // May see this as (import Yup from "yup") in some tutorials. Lambda School says this method seems to be less buggy.

export default function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .email("Must be a valid email address.")
            .required("Must include email address"),
        password: Yup.string()
            .min(7, "Password must have at least 7 characters.")
            .required("Password is required"),
    });

    /* Each time the form value state is updated, check to see if it is valid per our schema.
    This will allow us to enable/disable the submit button.*/
    useEffect(() => {
        /* We pass the entire state into the entire schema, no need to use reach here.
        We want to make sure it is all valid before we allow a user to submit.
        isValid comes from Yup directly. */
        formSchema.isValid(user).then((disable) => {
            setButtonDisabled(!disable);
        });
    });

    const handleChange = (e) => {
        /* e.persist allows us to use the synthetic event in an async manner.
        We need to be able to use it after the form validation. */
        e.persist();

        // Yup.reach will allow us to "reach" into the schema and test only one part.
        // We give reach the schema as the first argument, and the key we want to test as the second.
        Yup.reach(formSchema, e.target.name)
            // We can then validate using the value
            .validate(e.target.value)
            // If the validation is successful, we can clear the error message
            .then((valid) => {
                setErrors({
                    ...errors,
                    [e.target.name]: "",
                });
            })
            /* If the validation is unsuccessful, we can set the error message to the message
        returned from Yup (that we created in our schema) */
            .catch((err) => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0],
                });
            });

        // Wether or not our validation was successful, we will still set the state to the new value as the user is typing.
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
                <h3>Login</h3>
                <label htmlFor="emailInput">
                    <input
                        id="emailInput"
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        autoFocus
                        name="email"
                        value={user.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <hr />
                    {errors.email.length > 0 ? (
                        <p className="error">{errors.email}</p>
                    ) : null}
                </label>
                <label htmlFor="passwordInput">
                    <input
                        id="passwordInput"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                    />
                    <hr />
                    {errors.password.length > 7 ? (
                        <p className="error">{errors.password}</p>
                    ) : null}
                </label>
                <button disabled={buttonDisabled ? true : false}>Login</button>
            </form>
        </div>
    );
}
