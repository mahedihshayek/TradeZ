import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://tradez-backend.onrender.com/login",
                {
                    email,
                    password,
                },
            );

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.user.name);

            setEmail("");
            setPassword("");

            window.location.href =
                `https://zerodha-clone-jti1-ten.vercel.app/?token=${res.data.token}&name=${encodeURIComponent(res.data.user.name)}`;

        } catch (err) {
            alert(err.response?.data?.message || err.message);
        }
    };

    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">

                    <div className="col-lg-5 col-md-7 col-sm-10">

                        <div className="card shadow-lg border-0 rounded-4 p-4">

                            <div className="text-center mb-4">
                                <div
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        margin: "0 auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: "bold",
                                        fontSize: "18px"
                                    }}
                                >
                                    TradeZ
                                </div>

                                <h2 className="mt-3 fw-bold">
                                    Welcome Back
                                </h2>

                                <p className="text-muted">
                                    Log in to your account
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-2 fs-5"
                                >
                                    Login
                                </button>

                            </form>

                            <p className="text-center mt-4 text-muted">
                                Don't have an account?{" "}
                                <a href="/signup" className="text-decoration-none">
                                    Sign Up
                                </a>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;