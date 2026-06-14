export default function TrendingBlogs() {
  const blogs = [
    { title: "AI in 2026", desc: "Future of AI explained" },
    { title: "React vs Next.js", desc: "Which to choose?" },
    { title: "Backend Basics", desc: "Node.js explained simply" }
  ];

  return (
    <div style={{ padding: "60px", color: "white" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
        Trending Blogs
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px"
      }}>
        {blogs.map((b, i) => (
          <div
            key={i}
            style={{
              background: "#0f172a",
              border: "1px solid #334155",
              padding: "25px",
              borderRadius: "15px"
            }}
          >
            <h3>{b.title}</h3>
            <p style={{ color: "#cbd5e1" }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}