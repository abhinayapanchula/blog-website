export default function Stats() {
    const stats = [
        { number: "10K+", label: "Readers" },
        { number: "500+", label: "Blogs" },
        { number: "50+", label: "Authors" },
        { number: "99%", label: "Positive Feedback" }
    ];

    return (
        <div
            style={{
                padding: "60px 20px",
                background: "#020617",
                color: "white"
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                    maxWidth: "1200px",
                    margin: "auto"
                }}
            >
                {stats.map((s, i) => (
                    <div
                        key={i}
                        style={{
                            background: "#0f172a",
                            padding: "30px",
                            borderRadius: "15px",
                            textAlign: "center",
                            border: "1px solid #1e293b",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "40px",
                                marginBottom: "10px",
                                color: "#818cf8"
                            }}
                        >
                            {s.number}
                        </h1>

                        <p style={{ color: "#cbd5e1" }}>
                            {s.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}