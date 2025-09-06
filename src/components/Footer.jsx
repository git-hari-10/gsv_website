import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p>&copy; {new Date().getFullYear()} GSV Drones Research &amp; Development Organization. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;
