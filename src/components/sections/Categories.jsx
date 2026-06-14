export default function Categories() {
  const categories = [
    "React",
    "JavaScript",
    "AI",
    "CSS",
    "Node.js",
    "Frontend",
    "Backend",
    "UI/UX"
  ];

  return (
    <div
      style={{
        padding: "60px 20px",
        background: "#0f172a",
        textAlign: "center",
        color: "white"
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "30px"
        }}
      >
        Explore Categories 🏷️
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px"
        }}
      >
        {categories.map((cat, i) => (
          <button
            key={i}
            style={{
              padding: "12px 24px",
              borderRadius: "30px",
              border: "1px solid #334155",
              background: "#1e293b",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.3s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#6366f1";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#1e293b";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}