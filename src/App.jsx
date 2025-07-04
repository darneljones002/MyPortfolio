import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    { title: "Project One", image: "https://via.placeholder.com/600x400", description: "Description of Project One." },
    { title: "Project Two", image: "https://via.placeholder.com/600x400", description: "Description of Project Two." },
    { title: "Project Three", image: "https://via.placeholder.com/600x400", description: "Description of Project Three." },
  ];

  const journeySteps = [
    {
      title: "Education",
      description: "Bachelor of Science in Interdisciplinary Studies with a concentration in Computer Science from Liberty University.",
    },
    {
      title: "NCR, Inc.",
      description: "Debug Technician troubleshooting POS malfunctions while studying Computer Science.",
    },
    {
      title: "Amobee, Inc.",
      description: "Started as UI/UX Engineering Intern, then UI/UX Engineer working on social media campaign platforms using AngularJS and Java.",
    },
    {
      title: "Bank of America",
      description: "ReactJS Developer and UI Application Architect building internal and customer-facing apps with modern libraries and best practices.",
    },
    {
      title: "FINEOS Ltd",
      description: "Sr. Technical Consultant coding in Java, managing AWS deployments, creating custom features, and ensuring security protocols.",
    },
  ];

  return (
    <main className="bg-white text-black font-sans scroll-smooth">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Darnel Jones</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Work</a>
          <a href="#hire" className="hover:underline">Hire</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-bold mb-4">Darnel Jones</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl md:text-2xl mb-6">Creative Developer & Designer</motion.p>
        <a href="#projects" className="bg-black text-white px-6 py-3 rounded-full inline-block">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">I'm a creative developer passionate about crafting beautiful and functional digital experiences. With expertise in both design and development, I help brands and individuals bring their visions to life through thoughtful, impactful web experiences.</p>
        <a href="#hire" className="bg-black text-white px-8 py-3 rounded-full inline-block hover:bg-gray-800 transition">Hire</a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Selected Work</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)} className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer bg-white rounded shadow">
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-medium">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hire / My Journey Section with Timeline */}
      <section id="hire" className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">My Journey</h2>
        <div className="relative border-l-4 border-black">
          {journeySteps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              className="mb-12 ml-6"
            >
              <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-1"></div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-700 text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a href="#contact" className="mt-12 bg-black text-white px-8 py-3 rounded-full inline-block hover:bg-gray-800 transition">Get in Touch</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Let's Connect</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">I'm open to new opportunities and collaborations. Feel free to reach out!</p>
        <a href="mailto:youremail@example.com" className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition">Say Hello</a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Darnel Jones. All rights reserved.
      </footer>
    </main>
  );
}
