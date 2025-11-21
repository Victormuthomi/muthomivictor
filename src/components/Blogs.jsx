import { useEffect, useState } from "react";
import { LuInfinity } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function MyBlogs({ authorId }) {
  const command = "the-alcodist";
  const [typedCommand, setTypedCommand] = useState("");
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Typing effect for terminal command
    let i = 0;
    let deleting = false;
    const interval = setInterval(() => {
      if (!deleting) {
        setTypedCommand(command.slice(0, i + 1));
        i++;
        if (i === command.length) setTimeout(() => (deleting = true), 1000);
      } else {
        setTypedCommand(command.slice(0, i));
        i--;
        if (i < 0) {
          deleting = false;
          i = 0;
        }
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch author's blogs
    fetch(`https://razorblog-backend.onrender.com/blogs/author/${authorId}`)
      .then((res) => res.json())
      .then((data) => {
        // Sort by readers descending
        const sorted = data.sort((a, b) => b.blog.readers - a.blog.readers);
        setBlogs(sorted);
      })
      .catch(console.error);
  }, [authorId]);

  const getSnippet = (html, length = 100) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  const displayBlogs = blogs.slice(0, 5);

  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 bg-black text-white">
      {/* Terminal typing */}
      <div className="w-full max-w-4xl mb-4">
        <pre className="text-lg font-mono">
          <span className="text-green-400">
            $ {command}{" "}
            <LuInfinity
              className="inline text-cyan-400 opacity-90 animate-pulse"
              size={18}
            />{" "}
            |
          </span>
          <span className="text-white">{typedCommand}</span>
          <span className="text-green-400 animate-pulse">▋</span>
        </pre>
      </div>

      {/* Blogs */}
      <div className="w-full max-w-4xl font-mono space-y-4">
        {displayBlogs.map(({ blog }) => (
          <div key={blog.id} className="flex gap-4 animate-fade-in-up">
            <img
              src={blog.image_url}
              alt={blog.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <a
                href={`https://razorbill-website.vercel.app/blogs/${blog.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-bold hover:text-cyan-400"
              >
                {blog.title}
              </a>
              <p className="text-gray-300 text-sm mt-1">
                {getSnippet(blog.content, 120)}
              </p>
            </div>
          </div>
        ))}

        {blogs.length > 5 && (
          <div
            className="text-green-400 font-mono text-center mt-4 cursor-pointer hover:text-cyan-400"
            onClick={() => navigate(`/blogs/author/${authorId}`)}
          >
            [ More ]
          </div>
        )}

        {displayBlogs.length > 0 && (
          <pre className="text-green-400 mt-4">
            ----------------------------------------
          </pre>
        )}
      </div>
    </section>
  );
}
