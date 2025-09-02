"use client";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section
        id="experience"
        className="min-h-[60vh] flex flex-col items-center justify-center bg-[#101014] text-white px-4 py-20"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <Timeline />
      </section>
      <section
        id="projects"
        className="min-h-[60vh] flex flex-col items-center justify-center bg-[#18181b] text-white px-4 py-20"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <Projects />
      </section>

      <section
        id="contact"
        className="min-h-[40vh] flex flex-col items-center justify-center bg-[#101014] text-white px-4 pt-16"
      >
        <Contact />
      </section>

      <footer className="w-full text-center text-zinc-500 text-sm py-4 bg-[#101014]">
        &copy; {new Date().getFullYear()} Shubham Garg. All rights reserved.
      </footer>
      {/*
        Add more sections with corresponding IDs: about, projects, contact
        <section id="about">...</section>
        <section id="projects">...</section>
        <section id="contact">...</section>
      */}
    </>
  );
}
