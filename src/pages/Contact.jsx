import "./Pages.css";
import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // TODO: integrate your backend / form handler
        alert("Thanks! Message submitted — implement backend to send it for real.");
        setForm({ name: "", email: "", message: "" });
    }

    return (
        <div className="page-container">
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p className="lead">Reach out for quotes, partnerships or vendor inquiries.</p>

                <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
                    <div className="form-grid">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                        />

                        <label htmlFor="message" className="label-top">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us about your request, timeline and contact details"
                            rows="6"
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn primary full">Send Message</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Contact;
