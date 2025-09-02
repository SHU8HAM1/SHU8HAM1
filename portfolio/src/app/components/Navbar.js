import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.id;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="mx-auto rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg px-8 py-2 flex justify-center items-center gap-8 min-w-[320px] max-w-[90vw]">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`transition-colors text-[1.2rem] px-2 py-1 rounded text-white/80 hover:text-white hover:bg-white/10 ${
              active === section.id ? "text-white font-bold underline underline-offset-4" : ""
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
