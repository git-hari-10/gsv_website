import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/gsvlogo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    return (
        <>
            {/* overlay for mobile menu */}
            <div
                className={`nav-overlay ${open ? "show" : ""}`}
                onClick={() => setOpen(false)}
                aria-hidden={!open}
            />

            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="nav-container">
                    <Link to="/" className="brand" onClick={() => setOpen(false)}>
                        <div className="logo-wrap">
                            <img src={logo} alt="GSV Logo" className="logo-img" />
                        </div>
                        <div className="brand-text">
                            <span className="full">GSV Drones Research &amp; Development Organization</span>
                            <span className="short">GSV Drones R&amp;D</span>
                        </div>
                    </Link>

                    <button
                        className={`hamburger ${open ? "is-active" : ""}`}
                        onClick={() => setOpen(v => !v)}
                        aria-label="Toggle navigation"
                        aria-expanded={open}
                    >
                        <span className="hamburger-lines" />
                    </button>

                    <ul className={`nav-links ${open ? "active" : ""}`} role="menu">
                        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                        <li><Link to="/careers" onClick={() => setOpen(false)}>Careers</Link></li>
                        <li><Link to="/products" onClick={() => setOpen(false)}>Products</Link></li>
                        <li><Link to="/blog" onClick={() => setOpen(false)}>News/Blog</Link></li>
                        <li><Link to="/contact" onClick={() => setOpen(false)} className="cta">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
