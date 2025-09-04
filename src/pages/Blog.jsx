import "./Pages.css";

const posts = [
    {
        id: 1,
        title: "Why IPC Standards Matter in PCB Assembly",
        date: "2025-08-01",
        excerpt: "A quick primer on IPC standards and how we apply them to ensure product reliability."
    },
    {
        id: 2,
        title: "How We Do Quality Assurance",
        date: "2025-07-12",
        excerpt: "Overview of our testing procedures and the instrumentation we use."
    }
];

function Blog() {
    return (
        <div className="page-container">
            <h2>News / Blog</h2>
            <p>Updates from GSV Electronics — industry news, case studies, and announcements.</p>

            <div className="blog-list">
                {posts.map((post) => (
                    <article key={post.id} className="blog-card">
                        <h3>{post.title}</h3>
                        <small>{post.date}</small>
                        <p>{post.excerpt}</p>
                        <a href="#" className="btn">Read more</a>
                    </article>
                ))}
            </div>
        </div>
    );
}
export default Blog;