import "./Pages.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="hero">
            <h2>Welcome to GSV Electronics</h2>
            <p>Your trusted partner in Electronics Manufacturing &amp; Drone R&amp;D</p>
            <Link to="/services" className="btn">Explore Our Services</Link>
        </section>
    );
}
export default Home;
