import { useEffect, useState } from "react";
import {
  LuInfinity,
  LuCpu,
  LuShieldCheck,
  LuBookOpen,
  LuTriangleAlert,
  LuFolderSearch,
  LuEye,
  LuChevronRight,
} from "react-icons/lu";

export default function MyBlogs({ authorId }) {
  const [groupedBlogs, setGroupedBlogs] = useState({
    tdd: [],
    case_study: [],
    blog: [],
  });
  const [loading, setLoading] = useState(true);

  const categories = [
    {
      key: "tdd",
      label: "Technical Design Documents",
      sub: "System architecture, security hardening, and database blueprints.",
      icon: <LuCpu size={18} />,
      color: "text-amber-500",
    },
    {
      key: "case_study",
      label: "Industrial Case Studies",
      sub: "Production post-mortems and deep-dives into complex problem solving.",
      icon: <LuShieldCheck size={18} />,
      color: "text-blue-400",
    },
    {
      key: "blog",
      label: "General Knowledge Base",
      sub: "Technical notes, programming fundamentals, and industry observations.",
      icon: <LuBookOpen size={18} />,
      color: "text-zinc-500",
    },
  ];

  useEffect(() => {
    // Using the authorId passed via props or hardcoded
    const id = authorId || "691f0f2d531c6c2c7080d221";

    fetch(`https://razorblog-backend.onrender.com/blogs/author/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const groups = data.reduce(
          (acc, item) => {
            const blogData = item.blog || item;
            // LOOKING AT THE 'type' FIELD NOW
            const type = (blogData.type || "blog").toLowerCase().trim();

            if (acc[type]) {
              acc[type].push(blogData);
            } else {
              acc.blog.push(blogData);
            }
            return acc;
          },
          { tdd: [], case_study: [], blog: [] },
        );

        setGroupedBlogs(groups);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [authorId]);

  const getSnippet = (html) => {
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > 90 ? text.slice(0, 90) + "..." : text;
  };

  return (
    <section
      id="knowledge-base"
      className="py-24 bg-[#050505] text-zinc-300 px-6 font-mono"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white tracking-tighter mb-4 uppercase italic">
            Knowledge_Base
          </h2>
          <div className="h-1 w-20 bg-amber-500" />
        </div>

        <div className="space-y-32">
          {categories.map((cat) => (
            <div key={cat.key}>
              {/* Category Header */}
              <div className="flex items-end justify-between mb-8 border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-4">
                  <span className={`${cat.color}`}>{cat.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      {cat.label}
                    </h3>
                    <p className="text-[10px] text-zinc-600 uppercase mt-2 tracking-widest">
                      {cat.sub}
                    </p>
                  </div>
                </div>
                <span className="text-[9px] text-zinc-800 font-bold hidden md:block">
                  FS_PATH: /{cat.key}
                </span>
              </div>

              {/* Items or Error */}
              {groupedBlogs[cat.key].length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {groupedBlogs[cat.key].map((blog) => (
                    <a
                      key={blog.id}
                      href={`https://razorbill-website.vercel.app/blogs/${blog.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all rounded-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[8px] text-zinc-700 font-bold">
                            SHA_256: {blog.id.slice(-6)}
                          </span>
                          <div className="flex items-center gap-2 text-[8px] text-zinc-600">
                            <LuEye size={10} /> {blog.readers || 0}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-zinc-200 group-hover:text-amber-500 transition-colors uppercase mb-3 leading-tight">
                          {blog.title}
                        </h4>
                        <p className="text-[10px] text-zinc-500 leading-relaxed mb-6">
                          {getSnippet(blog.content)}
                        </p>
                      </div>
                      <div className="text-[8px] font-black text-zinc-800 group-hover:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                        <LuChevronRight size={10} /> Execute_Read_Protocol
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="py-16 border border-dashed border-zinc-900 rounded-sm flex flex-col items-center justify-center text-center opacity-50">
                  <LuTriangleAlert size={20} className="text-zinc-800 mb-4" />
                  <p className="text-[10px] text-zinc-700 uppercase tracking-[0.3em] font-bold italic">
                    {cat.key === "case_study"
                      ? "No Case Studies Analyzed"
                      : "Empty Directory"}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-40 pt-8 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-800 uppercase tracking-[0.3em]">
          <span>Index_integrity: 100%</span>
          <LuInfinity size={14} className="opacity-20" />
        </div>
      </div>
    </section>
  );
}
