export default function Navbar({ setPage }) {
  const handleAdminAccess = () => {
    const password = prompt("Enter Admin Password");

    // Cancel press chesthe
    if (password === null) {
      return;
    }

    // Correct password
    if (password === "admin123") {
      setPage("admin");
    } else {
      alert("Wrong Password ❌");
    }
  };

  return (
    <nav
      style={{
        background: "#0f172a",
        color: "white",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1e293b",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <h2
        style={{
          margin: 0,
          cursor: "pointer",
        }}
        onClick={() => setPage("home")}
      >
        Blog Website 🚀
      </h2>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Home */}
        <button
          onClick={() => setPage("home")}
          style={navBtn}
        >
          Home
        </button>

        {/* Login */}
        <button
          onClick={() => setPage("login")}
          style={loginBtn}
        >
          Login
        </button>

        {/* Signup */}
        <button
          onClick={() => setPage("signup")}
          style={signupBtn}
        >
          Signup
        </button>

        {/* Create Blog */}
        <button
          onClick={() => setPage("create")}
          style={createBtn}
        >
          Create Blog
        </button>

        {/* Admin */}
        <button
          onClick={handleAdminAccess}
          style={adminBtn}
        >
          Admin
        </button>
      </div>
    </nav>
  );
}

const navBtn = {
  background: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};

const loginBtn = {
  padding: "10px 18px",
  background: "transparent",
  color: "white",
  border: "1px solid #6366f1",
  borderRadius: "8px",
  cursor: "pointer",
};

const signupBtn = {
  padding: "10px 18px",
  background: "#6366f1",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const createBtn = {
  padding: "10px 18px",
  background: "#0ea5e9",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const adminBtn = {
  padding: "10px 18px",
  background: "#f59e0b",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};