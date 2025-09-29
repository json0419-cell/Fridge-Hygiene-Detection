import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Sensors from "./pages/Sensors";
import Methods from "./pages/Methods";
import Applications from "./pages/Applications";
import Challenges from "./pages/Challenges";
import Future from "./pages/Future";
import References from "./pages/References";
import Quiz from "./pages/Quiz";

export default function App() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sensors" element={<Sensors />} />
                    <Route path="/methods" element={<Methods />} />
                    <Route path="/applications" element={<Applications />} />
                    <Route path="/challenges" element={<Challenges />} />
                    <Route path="/future" element={<Future />} />
                    <Route path="/references" element={<References />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <footer className="footer">© 2025 Haoran Li · Fridge Hygiene Tutorial</footer>
        </>
    );
}
