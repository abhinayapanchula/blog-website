import { useState } from "react";

export default function CreateBlog({ setPage }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const publishBlog = () => {
        if (title.trim() === "" || content.trim() === "") {
            alert("Please fill all fields");
            return;
        }

        alert("Blog Published Successfully 🚀");

        setTitle("");
        setContent("");
    };

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
                    maxWidth: "900px",
                    margin: "auto",
                    background: "#0f172a",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
            >
                <h1
                    style={{
                        fontSize: "42px",
                        marginBottom: "30px",
                        textAlign: "center",
                    }}
                >
                    Create New Blog ✍️
                </h1>

                <input
                    type="text"
                    placeholder="Enter blog title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={inputStyle}
                />

                <textarea
                    placeholder="Write your blog content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={textareaStyle}
                />

                <button
                    onClick={publishBlog}
                    style={publishBtn}
                >
                    Publish Blog 🚀
                </button>

                <button
                    onClick={() => setPage("home")}
                    style={backBtn}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "16px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "white",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
};

const textareaStyle = {
    width: "100%",
    minHeight: "250px",
    padding: "16px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "white",
    fontSize: "16px",
    outline: "none",
    resize: "none",
    marginBottom: "20px",
    boxSizing: "border-box",
};

const publishBtn = {
    width: "100%",
    padding: "16px",
    background: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
};

const backBtn = {
    width: "100%",
    padding: "16px",
    background: "#0ea5e9",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
};