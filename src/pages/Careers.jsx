import "./Pages.css";

function Careers() {
    return (
        <div className="page-container">
            <h2>Our Careers</h2>
            <p>
                GSV Electronics offers end-to-end electronics manufacturing services:
                prototyping, PCB assembly (SMT / THT), testing, quality assurance and repair.
            </p>

            <div className="cards">
                <div className="card">
                    <h3>PCB Assembly</h3>
                    <p>Small runs to mass production, SMT & through-hole assembly.</p>
                </div>

                <div className="card">
                    <h3>Testing & QA</h3>
                    <p>Functional testing, ICT, and environmental stress screening.</p>
                </div>

                <div className="card">
                    <h3>Repair & Support</h3>
                    <p>Component-level repair, rework, and field support plans.</p>
                </div>
            </div>
        </div>
    );
}
export default Careers;
