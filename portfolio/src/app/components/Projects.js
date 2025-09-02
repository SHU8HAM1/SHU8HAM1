import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    image: "/vercel.svg", // Replace with your image path
    description: "The portfolio website you're on right now :).",
    link: "https://github.com/SHU8HAM1/SHU8HAM1",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Epiready",
    image: "/epiready.png",
    description:
      "A full-stack cold-chain logistics app built for tracking and managing shipments.",
    link: "https://github.com/UTSC-CSCC01-Software-Engineering-I/term-group-project-c01s25-project-epiready",
    tags: ["React", "Vite", "Flask", "PostgreSQL", "Tailwind", "Devops"],
  },
  {
    title: "TagGit",
    image: "/taggit.png",
    description: "An online multiplayer 2D tag game with proximity chat.",
    link: "https://github.com/UTSC-CSCC09-Programming-on-the-Web/project-runalot",
    tags: [
      "Express.js",
      "Next.js",
      "Socket.io",
      "Phaser",
      "Devops",
      "WebRTC",
      "Tailwind",
      "PostgreSQL",
    ],
  },
];

export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          className="relative bg-zinc-900/80 border border-zinc-800 rounded-2xl p-0 shadow-2xl hover:scale-[1.03] hover:border-white/20 transition-transform duration-200 flex flex-col h-[480px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Image at the top with no margin or padding */}
          <div className="h-48 w-full rounded-t-2xl overflow-hidden bg-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Title, description, tags, and link at bottom */}
          <div className="flex-1 flex flex-col px-6 pt-6 pb-4">
            <h3 className="text-2xl font-bold text-white mb-2 mt-2">
              {project.title}
            </h3>
            {/* Description below image and title */}
            <p className="text-zinc-300 text-base mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex justify-end">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm px-4 py-2 rounded-full font-semibold shadow transition-colors"
              >
                {/* GitHub Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
