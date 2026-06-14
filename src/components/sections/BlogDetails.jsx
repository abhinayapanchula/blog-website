export default function BlogDetails({
    setPage,
    selectedBlog,
}) {
    if (!selectedBlog) {
        return null;
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#020617",
                color: "white",
                padding: "60px 20px",
            }}
        >
            <div
                style={{
                    maxWidth: "1000px",
                    margin: "auto",
                    background: "#0f172a",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow:
                        "0 10px 30px rgba(0,0,0,0.5)",
                }}
            >
                {/* IMAGE */}
                <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    style={{
                        width: "100%",
                        borderRadius: "15px",
                        marginBottom: "30px",
                        maxHeight: "500px",
                        objectFit: "cover",
                    }}
                />

                {/* TITLE */}
                <h1
                    style={{
                        fontSize: "48px",
                        marginBottom: "25px",
                    }}
                >
                    {selectedBlog.title} 🚀
                </h1>

                {/* CONTENT */}
                <p
                    style={{
                        color: "#cbd5e1",
                        lineHeight: "2",
                        fontSize: "20px",
                    }}
                >
                    {selectedBlog.content}
                </p>

                {/* BUTTONS */}
                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        marginTop: "40px",
                        marginBottom: "40px",
                    }}
                >
                    <button
                        onClick={() =>
                            alert("You liked this blog ❤️")
                        }
                        style={{
                            padding: "14px 24px",
                            background: "#e11d48",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        ❤️ Like
                    </button>

                    <button
                        onClick={() =>
                            alert("Blog saved 🔖")
                        }
                        style={{
                            padding: "14px 24px",
                            background: "#0ea5e9",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        🔖 Save
                    </button>
                </div>

                {/* BACK BUTTON */}
                <button
                    onClick={() => setPage("home")}
                    style={{
                        padding: "14px 24px",
                        background: "#6366f1",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}