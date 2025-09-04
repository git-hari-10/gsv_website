import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="logo">GSV Electronics</h1>

                {/* Hamburger icon */}
                <div className="hamburger" onClick={() => setOpen(!open)}>
                    ☰
                </div>

                <ul className={`nav-links ${open ? "active" : ""}`}>
                    <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
                    <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
                    <li><Link to="/products" onClick={() => setOpen(false)}>Products</Link></li>
                    <li><Link to="/blog" onClick={() => setOpen(false)}>News/Blog</Link></li>
                    <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
