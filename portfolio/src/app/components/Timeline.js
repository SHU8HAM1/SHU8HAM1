import { motion } from "framer-motion";

const experiences = [
  {
    date: "July 2025 - Present",
    title: "Web Developer",
    company: "UTRA Hacks",
    description:
      "Organizing the biggest robotics hackathon in Canada and developing administrative tools for it.",
  },
  {
    date: "January 2025 - April 2025",
    title: "Software Engineer Intern",
    company: "UofT",
    description:
      "Worked on improving digital catalogue websites of UofT by building internal tools and fixing bugs.",
  },
];

export default function Timeline() {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 relative">
      <div className="absolute left-1/2 top-0 h-full w-1 bg-zinc-800 -translate-x-1/2" />
      <ol className="relative z-10">
        {experiences.map((exp, idx) => (
          <li
            key={exp.title + exp.date}
            className="mb-12 flex items-center w-full"
          >
            {/* Date on the left */}
            <div className="w-1/2 flex justify-end pr-8">
              <span className="text-zinc-400 text-sm md:text-base whitespace-nowrap bg-zinc-900 px-3 py-1 rounded-lg shadow border border-zinc-800">
                {exp.date}
              </span>
            </div>
            {/* Marker and line */}
            <div className="relative z-20">
              <span className="block w-5 h-5 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border-4 border-zinc-950 shadow-lg" />
            </div>
            {/* Card on the right */}
            <motion.div
              className="w-1/2 pl-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 shadow-lg">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {exp.title}
                </h3>
                <span className="block text-zinc-400 text-sm mb-2">
                  {exp.company}
                </span>
                <p className="text-zinc-300 text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}
