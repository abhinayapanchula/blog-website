export default function AdminDashboard({ setPage }) {
    const blogs = [
        "React Basics",
        "Tailwind Tips",
        "Node.js Guide",
    ];

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#020617",
                color: "white",
                padding: "40px",
            }}
        >
            <h1
                style={{
                    fontSize: "42px",
                    marginBottom: "40px",
                    textAlign: "center",
                }}
            >
                Admin Dashboard 🧑‍💻
            </h1>

            {/* Stats */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(220px,1fr))",
                    gap: "20px",
                    marginBottom: "50px",
                }}
            >
                <div style={cardStyle}>
                    <h2>📚 Blogs</h2>
                    <p style={numberStyle}>120</p>
                </div>

                <div style={cardStyle}>
                    <h2>👥 Users</h2>
                    <p style={numberStyle}>5K</p>
                </div>

                <div style={cardStyle}>
                    <h2>💬 Comments</h2>
                    <p style={numberStyle}>850</p>
                </div>
            </div>

            {/* Blog List */}
            <div
                style={{
                    background: "#0f172a",
                    padding: "30px",
                    borderRadius: "20px",
                }}
            >
                <h2
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    Recent Blogs 📝
                </h2>

                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "#1e293b",
                            padding: "18px",
                            borderRadius: "10px",
                            marginBottom: "15px",
                        }}
                    >
                        <p>{blog}</p>

                        <button
                            onClick={() =>
                                alert("Blog Deleted 🗑️")
                            }
                            style={{
                                background: "#dc2626",
                                color: "white",
                                border: "none",
                                padding: "10px 16px",
                                borderRadius: "8px",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={() => setPage("home")}
                style={{
                    marginTop: "40px",
                    padding: "14px 24px",
                    background: "#6366f1",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "16px",
                }}
            >
                Back to Home
            </button>
        </div>
    );
}

const cardStyle = {
    background: "#0f172a",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
};

const numberStyle = {
    fontSize: "38px",
    fontWeight: "bold",
    color: "#818cf8",
};