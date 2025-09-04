import "./Pages.css";

function Products() {
    const products = [
        { id: 1, name: "Industrial Controller", desc: "Rugged controller for factory automation" },
        { id: 2, name: "Power Supply Unit", desc: "High-efficiency custom power supplies" },
        { id: 3, name: "IoT Sensor Module", desc: "Low-power sensors for telemetry" },
    ];

    return (
        <div className="page-container">
            <h2>Products</h2>
            <p>Browse a few example product families we manufacture.</p>

            <div className="cards">
                {products.map((p) => (
                    <div key={p.id} className="card">
                        <h3>{p.name}</h3>
                        <p>{p.desc}</p>
                        <button className="btn">Request Quote</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Products;