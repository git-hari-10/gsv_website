import "./Pages.css";

function About() {

    const profiles = new Array(7).fill(null);

    return (
        <div className="page-container about-page">
            <section className="about-intro">
                <h2>About GSV Drones Research &amp; Development Organization</h2>
                <p className="lead">
                    We design, prototype and manufacture advanced drone systems and provide R&D services for aerial robotics.
                    Below you can add detailed company history, mission, milestones and certifications — this section is editable.
                </p>
            </section>

            <section className="team-section">
                <div className="team-header">
                    <h3>Our Team</h3>
                    <p className="muted">Top professionals — profiles below are placeholders. Replace them with real employee names, designations and bios.</p>
                </div>

                <div className="team-scroller" role="list" aria-label="Team profiles horizontally scrollable">
                    {profiles.map((_, i) => (
                        <article key={i} className="team-card" role="listitem">
                            <div className="avatar-placeholder" aria-hidden="true">
                                {/* empty img placeholder; replace with <img src="..." /> */}
                                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="6" fill="#e9f2f9"/>
                                    <path d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-3 0-6 1.5-6 3v1h12v-1c0-1.5-3-3-6-3z" fill="#8fb0c9"/>
                                </svg>
                            </div>

                            <div className="team-meta">
                                <h4 className="team-name">Employee Name</h4>
                                <p className="team-role">Designation — Position</p>
                                <p className="team-bio">Short bio or summary — leave blank or replace with employee details later.</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-footer-note">
                <p className="muted">Add more sections below as needed — certifications, case studies, partners, media and contact for recruitment.</p>
            </section>
        </div>
    );
}

export default About;
