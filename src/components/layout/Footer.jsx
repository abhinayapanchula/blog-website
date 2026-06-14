export default function Footer() {
  return (
    <footer style={{
      background: "#0f172a",
      color: "white",
      padding: "50px 20px",
      marginTop: "60px",
      borderTop: "1px solid #1e293b"
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px"
      }}>

        <div>
          <h2>Blog Website 🚀</h2>
          <p style={{ color: "#94a3b8" }}>
            Modern blog platform built with React
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Blogs</p>
          <p>About</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <p>Twitter</p>
          <p>GitHub</p>
          <p>LinkedIn</p>
        </div>

      </div>

      <div style={{
        textAlign: "center",
        marginTop: "30px",
        color: "#64748b"
      }}>
        © 2026 Blog Website. All rights reserved.
      </div>

    </footer>
  );
}