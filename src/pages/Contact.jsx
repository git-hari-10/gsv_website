import "./Pages.css";
import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    function onChange(e) {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        // just a dummy handler for now
        alert(`Thanks ${form.name}! We'll contact you soon.`);
        setForm({ name: "", email: "", message: "" });
    }

    return (
        <div className="page-container">
            <h2>Contact Us</h2>
            <p>Reach out for quotes, partnerships or vendor inquiries.</p>

            <form className="contact-form" onSubmit={onSubmit}>
                <label>
                    Name
                    <input name="name" value={form.name} onChange={onChange} required />
                </label>

                <label>
                    Email
                    <input name="email" value={form.email} onChange={onChange} type="email" required />
                </label>

                <label>
                    Message
                    <textarea name="message" value={form.message} onChange={onChange} rows="5" required />
                </label>

                <button className="btn" type="submit">Send Message</button>
            </form>
        </div>
    );
}
export default Contact;
