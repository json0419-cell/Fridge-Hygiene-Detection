import React from "react";
import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "Home" },
    { to: "/sensors", label: "Sensors" },
    { to: "/vision", label: "Vision" },
    { to: "/applications", label: "Applications" },
    { to: "/challenges", label: "Challenges" },
    { to: "/future", label: "Future" },
    { to: "/references", label: "References" },
    { to: "/quiz", label: "Quiz" }
];

export default function NavBar(){
    return (
        <div className="nav">
            <div className="wrap">
                {links.map(l=>(
                    <NavLink key={l.to} to={l.to}
                             className={({isActive})=> isActive? "active": undefined}>
                        {l.label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
