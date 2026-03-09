import { useEffect, useState } from "react";
import { LuInfinity, LuFileText, LuEye, LuArrowRight } from "react-icons/lu";

export default function MyBlogs({ authorId }) {
  const username = "the-alcodist";
  const command = "ls -la --sort=popularity ./knowledge_base";
  const [typedCommand, setTypedCommand] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= command.length) {
        setTypedCommand(command.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 40);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    fetch(`https://razorblog-backend.onrender.com/blogs/author/${authorId}`)
      .then((res) => res.json())
      .then((data) => {
        // Data usually comes in as { blog: {...} } based on your map logic
        const sorted = data.sort((a, b) => b.blog.readers - a.blog.readers);
        setBlogs(sorted);
      })
      .catch(console.error);
  }, [authorId]);

  const getSnippet = (html) => {
    const text = html.replace(/<[^>]*>/g, ""); // Faster regex-based strip for performance
    return text.length > 120 ? text.slice(0, 120) + "..." : text;
  };

  const displayBlogs = blogs.slice(0, 4);

  return (
    <section className="py-20 bg-[#050505] text-zinc-300 px-6 font-mono">
      <div className="max-w-4xl mx-auto">
        
        {/* TERMINAL HEADER */}
        <div className="mb-12 text-sm opacity-80">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-amber-500 font-bold">➜</span>
            <span className="text-zinc-500 underline underline-offset-4">~/thoughts_and_theories</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white">$ {typedCommand}</span>
            <span className="animate-pulse w-2 h-4 bg-amber-500 inline-block" />
          </div>
        </div>

        {/* BLOG GRID: Senior Industrial Style */}
        <div className="grid grid-cols-1 gap-8">
          {displayBlogs.map(({ blog }) => (
            <div key={blog.id} className="group relative flex flex-col md:flex-row gap-6 p-4 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/20 transition-all rounded-xl">
              
              {/* IMAGE / ICON COMBO */}
              <div className="relative w-full md:w-32 h-32 shrink-0 overflow-hidden rounded-lg border border-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-2 left-2 p-1 bg-black/80 rounded border border-white/10">
                  <LuFileText size={14} className="text-amber-500" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <a
                    href={`https://razorbill-website.vercel.app/blogs/${blog.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors tracking-tight"
                  >
                    {blog.title.toUpperCase()}
                  </a>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                    <LuEye size={12}/> {blog.readers || 0} READERS
                  </div>
                </div>
                
                <p className="text-zinc-500 text-xs leading-relaxed mb-4">
                  {getSnippet(blog.content)}
                </p>

                <a 
                  href={`https://razorbill-website.vercel.app/blogs/${blog.id}`}
                  target="_blank"
                  className="text-[10px] text-amber-500/80 font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Decrypt Full Entry <LuArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* MORE BUTTON */}
        {blogs.length > 4 && (
          <div className="mt-12 text-center">
            <a 
              href={`https://razorbill-website.vercel.app/author/${authorId}`}
              className="px-8 py-3 bg-zinc-900/50 border border-zinc-800 text-[10px] text-zinc-400 font-bold uppercase tracking-[0.3em] hover:border-amber-500/40 hover:text-white transition-all rounded-lg"
            >
              [ View Complete Knowledge Base ]
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
