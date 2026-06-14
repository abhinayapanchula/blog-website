export default function Signup() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#020617",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
            }}
        >
            <div
                style={{
                    background: "#0f172a",
                    padding: "40px",
                    borderRadius: "20px",
                    width: "100%",
                    maxWidth: "420px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    border: "1px solid #1e293b"
                }}
            >
                <h1
                    style={{
                        color: "white",
                        textAlign: "center",
                        marginBottom: "30px"
                    }}
                >
                    Create Account 🚀
                </h1>

                <input
                    type="text"
                    placeholder="Enter your name"
                    style={inputStyle}
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    style={inputStyle}
                />

                <input
                    type="password"
                    placeholder="Create password"
                    style={inputStyle}
                />

                <button
                    style={buttonStyle}
                    onClick={() => alert("Account Created Successfully 🎉")}
                >
                    Sign Up
                </button>

                <p
                    style={{
                        color: "#94a3b8",
                        textAlign: "center",
                        marginTop: "20px"
                    }}
                >
                    Already have an account? Login
                </p>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "white",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box"
};

const buttonStyle = {
    width: "100%",
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    background: "#8b5cf6",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold"
};