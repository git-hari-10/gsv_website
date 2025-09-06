import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/gsvlogo.png"; // adjust if using jpg

function Navbar() {
    const [open, setOpen] = useState(false);

    // lock body scroll when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <nav className="navbar" role="navigation" aria-label="Main navigation">
                <div className="nav-container">
                    <Link to="/" className="brand" onClick={() => setOpen(false)}>
                        <div className="logo-wrap" aria-hidden="true">
                            <img src={logo} alt="GSV Logo" className="logo-img" />
                        </div>

                        <div className="brand-text">
              <span className="brand-title full">
                GSV Drones Research &amp; Development Organization
              </span>
                            <span className="brand-title short">GSV Drones R&amp;D Organization</span>
                        </div>
                    </Link>

                    <button
                        className={`hamburger ${open ? "is-active" : ""}`}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                    >
                        <span className="hamburger-lines" />
                    </button>

                    <ul className={`nav-links ${open ? "active" : ""}`}>
                        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
                        <li><Link to="/services" onClick={() => setOpen(false)}>Careers</Link></li>
                        <li><Link to="/products" onClick={() => setOpen(false)}>Products</Link></li>
                        <li><Link to="/blog" onClick={() => setOpen(false)}>News/Blog</Link></li>
                        <li><Link to="/contact" onClick={() => setOpen(false)} className="contact-cta">Contact Us</Link></li>
                    </ul>
                </div>

                {open && <div className="nav-overlay" onClick={() => setOpen(false)} aria-hidden="true" />}
            </nav>
        </>
    );
}

export default Navbar;
