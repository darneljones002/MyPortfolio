import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/UI/card";
import { Button } from "./components/UI/button";



export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    { title: "Project One", image: "https://via.placeholder.com/600x400", description: "Description of Project One." },
    { title: "Project Two", image: "https://via.placeholder.com/600x400", description: "Description of Project Two." },
    { title: "Project Three", image: "https://via.placeholder.com/600x400", description: "Description of Project Three." },
  ];

  return (
    <main className="bg-white text-black font-sans scroll-smooth">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Darnel Jones</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Work</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-bold mb-4">Darnel Jones</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl md:text-2xl mb-6">Creative Developer & Designer</motion.p>
        <a href="#projects"><Button className="bg-black text-white px-6 py-3 rounded-full">View My Work</Button></a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-gray-600">I'm a creative developer passionate about crafting beautiful and functional digital experiences. My work bridges design and technology to bring unique ideas to life.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Selected Work</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} onClick={() => setSelectedProject(project)} className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-medium">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg relative">
            <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-4 text-2xl">×</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-gray-700">{selectedProject.description}</p>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Let's Connect</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">I'm open to new opportunities and collaborations. Feel free to reach out!</p>
        <Button className="bg-black text-white px-6 py-3 rounded-full" asChild>
          <a href="mailto:youremail@example.com">Say Hello</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Darnel Jones. All rights reserved.
      </footer>
    </main>
  );
}
