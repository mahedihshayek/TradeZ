import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

    useEffect(() => {

        const params = new URLSearchParams(window.location.search);

        const token = params.get("token");
        const name = params.get("name");

        if (token) {
            localStorage.setItem("token", token);
        }

        if (name) {
            localStorage.setItem("username", name);
        }

        if (token || name) {
            window.history.replaceState({}, document.title, "/");
        }

        const savedToken = localStorage.getItem("token");

        if (!savedToken) {
            window.location.href = "https://tradez-frontend.vercel.app/login";
        }

    }, []);

    return (
        <>
            <TopBar />
            <Dashboard />
        </>
    );
}

export default Home;