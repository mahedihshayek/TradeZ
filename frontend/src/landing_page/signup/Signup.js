import React, { useState } from "react";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://zerodhaclone-woxs.onrender.com/signup", {
                name,
                email,
                password,
            });

            alert(res.data.message);

            setName("");
            setEmail("");
            setPassword("");
            window.location.href = "/login";

        } catch (err) {
            alert(err.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center align-items-center">

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
                                    Create your account
                                </h2>

                                <p className="text-muted">
                                    Start investing with TradeZ
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
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
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-2 fs-5"
                                >
                                    Sign Up
                                </button>

                            </form>

                            <p className="text-center mt-4 text-muted">
                                Already have an account?{" "}
                                <a href="/login" className="text-decoration-none">
                                    Login
                                </a>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Signup;