export default function SearchBar() {
    return (
        <div
            style={{
                padding: "40px 20px",
                background: "#020617",
                textAlign: "center"
            }}
        >
            <h2
                style={{
                    color: "white",
                    marginBottom: "20px",
                    fontSize: "30px"
                }}
            >
                Search Blogs 🔍
            </h2>

            <input
                type="text"
                placeholder="Search blogs..."
                style={{
                    width: "60%",
                    maxWidth: "600px",
                    padding: "15px",
                    borderRadius: "12px",
                    border: "1px solid #334155",
                    background: "#0f172a",
                    color: "white",
                    fontSize: "16px",
                    outline: "none"
                }}
            />
        </div>
    );
}