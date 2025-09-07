import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/gsvlogo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const onScroll = () => {
            const nav = document.querySelector(".navbar");
            if (!nav) return;
            if (window.scrollY > 24) nav.classList.add("scrolled");
            else nav.classList.remove("scrolled");
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="navbar" role="banner">
            <div className="nav-container">
                <Link to="/" className="logo-link" onClick={() => setOpen(false)}>
                    <div className="logo-wrap">
                        <img src={logo} alt="GSV Drones logo" className="logo-img" />
                    </div>
                    <span className="company-name">
                        GSV Drones Research &amp; Development Organization
                    </span>
                </Link>

                <nav className={`nav-links ${open ? "active" : ""}`} role="navigation" aria-label="Main navigation">
                    <ul>
                        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                        <li><Link to="/careers" onClick={() => setOpen(false)}>Careers</Link></li>
                        <li><Link to="/products" onClick={() => setOpen(false)}>Products</Link></li>
                        <li><Link to="/blog" onClick={() => setOpen(false)}>News/Blog</Link></li>
                        <li><Link to="/contact" className="cta" onClick={() => setOpen(false)}>Contact Us</Link></li>
                    </ul>
                </nav>

                <button
                    className={`hamburger ${open ? "is-active" : ""}`}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    <span className="hamburger-lines" aria-hidden="true">
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                        <span className="hamburger-line" />
                    </span>
                </button>

                <div
                    className={`mobile-overlay ${open ? "show" : ""}`}
                    onClick={() => setOpen(false)}
                    aria-hidden={!open}
                />
            </div>
        </header>
    );
}
