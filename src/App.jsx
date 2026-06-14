import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import FeaturedBlogs from "./components/sections/FeaturedBlogs";
import Stats from "./components/sections/Stats";
import Footer from "./components/layout/Footer";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import BlogDetails from "./components/sections/BlogDetails";
import CreateBlog from "./components/sections/CreateBlog";
import AdminDashboard from "./components/admin/AdminDashboard";

export default function App() {
  const [page, setPage] = useState("home");

  // SELECTED BLOG
  const [selectedBlog, setSelectedBlog] =
    useState(null);

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar setPage={setPage} />

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <Hero />

          <FeaturedBlogs
            setPage={setPage}
            setSelectedBlog={setSelectedBlog}
          />

          <Stats />

          <Footer />
        </>
      )}

      {/* LOGIN */}
      {page === "login" && (
        <Login />
      )}

      {/* SIGNUP */}
      {page === "signup" && (
        <Signup />
      )}

      {/* BLOG DETAILS */}
      {page === "details" && (
        <BlogDetails
          setPage={setPage}
          selectedBlog={selectedBlog}
        />
      )}

      {/* CREATE BLOG */}
      {page === "create" && (
        <CreateBlog setPage={setPage} />
      )}

      {/* ADMIN */}
      {page === "admin" && (
        <AdminDashboard setPage={setPage} />
      )}
    </div>
  );
}