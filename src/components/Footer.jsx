import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/gsvlogo.png";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner page-container">
                <div className="footer-column about">
                    <img src={logo} alt="GSV Logo" className="footer-logo" />
                    <p>At GSV Drones R&amp;D Organization we develop drones and avionics solutions for industry applications.</p>

                    <div className="address">
                        <h4>Address</h4>
                        <address>
                            GSV Drones R&amp;D Organization<br/>
                            12/4 Industrial Estate, Anna Nagar<br/>
                            Vellore, Tamil Nadu, 632001<br/>
                            India
                        </address>
                        <p className="small">Phone: +91 98XXXXXXXX | Email: enquiries@gsvdrones.com</p>
                    </div>
                </div>

                <div className="footer-column links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Careers</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/blog">News / Blog</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-column social">
                    <h4>Follow Us</h4>
                    <p className="muted">Replace with your profiles</p>

                    <div className="social-icons">
                        <a href="#" aria-label="Instagram" className="social-link"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="YouTube" className="social-link"><i className="fab fa-youtube"></i></a>
                        <a href="#" aria-label="WhatsApp" className="social-link"><i className="fab fa-whatsapp"></i></a>
                        <a href="#" aria-label="Facebook" className="social-link"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="page-container">
                    <p className="copyright">© {new Date().getFullYear()} GSV Drones R&amp;D Organization. All rights reserved.</p>
                </div>
            </div>

            <a className="wa-fab" href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
        </footer>
    );
}
