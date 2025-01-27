import { useState } from "react";
import React from "react";
function Register() {
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        celphone: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        celphone: "",
    })
    const [loading, setLoading] = useState<boolean>(false);
    const changeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };
    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true);
        try {
            const res : Response = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues),
            });
            if (res.ok) {
                window.location.href = '/check';
                return;
            }
            const err = await res.json();
            setErrors(err)
            console.log(errors);
        } catch (error) {
            console.error("An error occurred:", error);
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <>
            <header className="login__header">
                <h1>Register</h1>
            </header>
            <form onSubmit={register} className="login__form">
                <span className={"login__error"}>{errors.username}</span>
                <div className="login__camp">
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        type="text"
                        id="username"
                        placeholder="Enter your username..."
                        onChange={changeValues}
                        value={formValues.username}
                    />
                </div>
                <span className={"login__error"}>{errors.email}</span>
                <div className="login__camp">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Enter your email..."
                        onChange={changeValues}
                        value={formValues.email}
                    />
                </div>
                <span className={"login__error"}>{errors.password}</span>
                <div className="login__camp">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Enter your password..."
                        onChange={changeValues}
                        value={formValues.password}
                    />
                </div>
                <span className={"login__error"}>{errors.celphone}</span>
                <div className="login__camp">
                    <label htmlFor="celphone">Celphone</label>
                    <input
                        name="celphone"
                        type="number"
                        id="celphone"
                        placeholder="Enter your celphone..."
                        onChange={changeValues}
                        value={formValues.celphone}
                    />
                </div>
                <button disabled={loading} type="submit" className={`login__button ${loading ? "loginBtn" : ""}`}>
                    Register
                </button>
            </form>
            <div className="login__options">
                <a href={"/"}>Already have an account?</a>
                <a href={"/register"}>Don't have an account?</a>
            </div>
        </>
    );
}

export default Register;
