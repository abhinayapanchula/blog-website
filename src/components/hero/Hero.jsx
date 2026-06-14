import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      style={{
        color: "white",
        padding: "120px 20px",
        textAlign: "center",
        background:
          "linear-gradient(to bottom, #0f172a, #020617)"
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          marginBottom: "20px"
        }}
      >
        Discover Amazing Blogs ✨
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: "20px",
          color: "#cbd5e1",
          maxWidth: "700px",
          margin: "auto"
        }}
      >
        Read modern tech blogs, tutorials, and trending articles
        from developers around the world.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        style={{
          marginTop: "35px",
          padding: "15px 30px",
          border: "none",
          borderRadius: "10px",
          background: "#6366f1",
          color: "white",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Explore Blogs
      </motion.button>
    </div>
  );
}