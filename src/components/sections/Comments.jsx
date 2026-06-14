import { useState } from "react";

export default function Comments() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const [comments, setComments] = useState([
        {
            name: "Abhinaya",
            text: "Amazing blog! Very useful 🚀",
        },
    ]);

    const addComment = () => {
        if (name.trim() === "" || comment.trim() === "") {
            alert("Please fill all fields");
            return;
        }

        const newComment = {
            name,
            text: comment,
        };

        setComments([newComment, ...comments]);

        setName("");
        setComment("");
    };

    return (
        <div
            style={{
                marginTop: "60px",
            }}
        >
            <h2
                style={{
                    marginBottom: "25px",
                    fontSize: "30px",
                }}
            >
                Comments 💬
            </h2>

            {/* Input Section */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    marginBottom: "30px",
                }}
            >
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                />

                <textarea
                    placeholder="Write your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={textareaStyle}
                />

                <button
                    onClick={addComment}
                    style={buttonStyle}
                >
                    Post Comment
                </button>
            </div>

            {/* Comments List */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                {comments.map((c, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#1e293b",
                            padding: "20px",
                            borderRadius: "12px",
                            border: "1px solid #334155",
                        }}
                    >
                        <h3
                            style={{
                                marginBottom: "10px",
                                color: "#818cf8",
                            }}
                        >
                            {c.name}
                        </h3>

                        <p
                            style={{
                                color: "#cbd5e1",
                                lineHeight: "1.6",
                            }}
                        >
                            {c.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const inputStyle = {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
    fontSize: "16px",
    outline: "none",
};

const textareaStyle = {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
    fontSize: "16px",
    outline: "none",
    minHeight: "120px",
    resize: "none",
};

const buttonStyle = {
    padding: "14px",
    background: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
};