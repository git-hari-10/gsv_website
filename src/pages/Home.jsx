import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css"; // using central Pages.css; change to './Home.css' if you prefer local file

export default function Home() {
    return (
        <>
            <section className="hero-landing" role="region" aria-label="Hero">
                <div className="hero-overlay" />
                <div className="hero-content page-container">
                    <div className="hero-inner">
                        <div className="hero-left">
                            <h1>Explore Our Next-Gen Drone Technology</h1>
                            <p className="hero-sub">
                                We design and manufacture advanced aerial systems — from R&amp;D prototypes to production-ready UAVs.
                                Integrated avionics, rigorous testing and industrial-grade manufacturing.
                            </p>

                            <div className="hero-ctas">
                                <Link to="/services" className="btn primary">Explore Our Services</Link>
                                <Link to="/contact" className="btn outline">Get In Touch</Link>
                            </div>
                        </div>

                        <div className="hero-right">
                            {/* search icon & small callout — optional interactive area */}
                            <div className="hero-search">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-container">
                <div className="hero-features" aria-hidden="false">
                    <article className="feature">
                        <i className="fas fa-cogs"></i>
                        <h4>Engineering</h4>
                        <p>Full-stack electronics & flight-control development.</p>
                    </article>

                    <article className="feature">
                        <i className="fas fa-plane"></i>
                        <h4>Prototyping</h4>
                        <p>Rapid iterations and flight testing to validate designs.</p>
                    </article>

                    <article className="feature">
                        <i className="fas fa-industry"></i>
                        <h4>Manufacturing</h4>
                        <p>Quality-driven production with IPC-compliant assembly.</p>
                    </article>
                </div>
            </section>
        </>
    );
}
