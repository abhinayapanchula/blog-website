import { useState } from "react";

export default function FeaturedBlogs({
  setPage,
  setSelectedBlog,
}) {
  const [search, setSearch] = useState("");

  const blogs = [
    {
      title: "React Basics",
      desc: "Learn React step by step",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee",

      content:
        "React is one of the most powerful JavaScript libraries used for building modern web applications. Developers use React to create fast, scalable, and interactive user interfaces. React works using reusable components which helps in writing clean and maintainable code. One of the biggest advantages of React is the Virtual DOM which improves performance by updating only required parts of the webpage. React is maintained by Meta and used by companies like Facebook, Netflix, and Instagram. Learning React is important for frontend developers because it simplifies UI development and supports huge ecosystems of libraries and tools.",
    },

    {
      title: "Tailwind CSS",
      desc: "Create beautiful websites easily",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",

      content:
        "Tailwind CSS is a utility-first CSS framework that helps developers design modern websites quickly. Instead of writing large CSS files, Tailwind provides utility classes that can directly style elements inside HTML or JSX. Developers love Tailwind because it improves development speed and keeps code organized. Tailwind also makes responsive design easier for mobile and desktop screens. Many startups and professional developers use Tailwind because it creates modern UI designs with minimal effort.",
    },

    {
      title: "Node.js Guide",
      desc: "Backend development explained",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",

      content:
        "Node.js is a JavaScript runtime environment used for backend development. It allows developers to run JavaScript outside the browser and build servers, APIs, and backend applications. Node.js uses an event-driven architecture which makes it fast and scalable. Developers use Node.js to build chat apps, streaming services, and REST APIs. Since frontend and backend both use JavaScript, Node.js simplifies full stack development.",
    },

    {
      title: "Artificial Intelligence",
      desc: "Future of smart technology",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",

      content:
        "Artificial Intelligence is transforming the future of technology. AI systems can analyze data, recognize images, understand voice commands, and automate tasks. Today AI is used in healthcare, banking, robotics, and software development. Machine learning and deep learning are important branches of AI. Companies worldwide are investing heavily in AI because it improves productivity and innovation. In the future AI will become an essential part of daily life.",
    },

    {
      title: "Cyber Security",
      desc: "Protect systems from hackers",
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",

      content:
        "Cyber Security focuses on protecting systems, networks, and applications from cyber attacks. Ethical hackers help companies identify vulnerabilities before attackers exploit them. Strong passwords, encryption, and secure coding practices are important for cyber security. Today organizations invest heavily in security because data breaches can cause major financial losses. Learning cyber security opens career opportunities in ethical hacking, penetration testing, and network security.",
    },

    {
      title: "JavaScript Mastery",
      desc: "Become strong in JavaScript",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

      content:
        "JavaScript is one of the most important programming languages in web development. It allows developers to create interactive websites and dynamic applications. JavaScript supports frontend and backend development through technologies like React and Node.js. Learning JavaScript fundamentals such as variables, functions, loops, arrays, and objects is essential for every web developer. Advanced concepts like asynchronous programming and APIs make JavaScript even more powerful.",
    },

    {
      title: "Cloud Computing",
      desc: "Learn AWS and cloud basics",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

      content:
        "Cloud Computing allows businesses to store and access data through the internet instead of local servers. Platforms like AWS, Microsoft Azure, and Google Cloud provide cloud services worldwide. Cloud computing improves scalability, flexibility, and cost efficiency. Many companies use cloud infrastructure to host applications and manage databases securely. Understanding cloud computing is important for modern software engineers.",
    },

    {
      title: "Machine Learning",
      desc: "Introduction to machine learning",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",

      content:
        "Machine Learning is a branch of Artificial Intelligence where systems learn patterns from data and make predictions. ML algorithms are used in recommendation systems, image recognition, fraud detection, and autonomous vehicles. Python is the most popular language for machine learning because of libraries like TensorFlow and Scikit-learn. Machine learning is rapidly growing and creating new innovations across industries.",
    },

    {
      title: "UI UX Design",
      desc: "Design modern user experiences",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",

      content:
        "UI UX Design focuses on creating attractive and user-friendly digital experiences. UI stands for User Interface and UX stands for User Experience. Good design improves usability and customer satisfaction. Designers use tools like Figma and Adobe XD to create prototypes and layouts. Modern applications require clean navigation, responsive layouts, and engaging visuals for better user interaction.",
    },

    {
      title: "Python Programming",
      desc: "Learn Python easily",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",

      content:
        "Python is one of the easiest and most powerful programming languages. It is widely used in web development, data science, automation, and artificial intelligence. Python syntax is simple and beginner-friendly which makes learning easier. Developers use frameworks like Django and Flask for backend development. Python is also highly popular in machine learning and scientific computing.",
    },
  ];

  const filteredBlogs = blogs.filter((blog) =>
    blog.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "80px 20px",
        background: "#020617",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "42px",
        }}
      >
        Featured Blogs ✨
      </h1>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto 50px",
        }}
      >
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #334155",
            background: "#0f172a",
            color: "white",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px,1fr))",
          gap: "30px",
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        {filteredBlogs.map((blog, index) => (
          <div
            key={index}
            style={{
              background: "#0f172a",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid #1e293b",
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h2>{blog.title}</h2>

              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "20px",
                }}
              >
                {blog.desc}
              </p>

              <button
                onClick={() => {
                  setSelectedBlog(blog);
                  setPage("details");
                }}
                style={{
                  padding: "12px 20px",
                  background: "#6366f1",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Read More 🚀
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}