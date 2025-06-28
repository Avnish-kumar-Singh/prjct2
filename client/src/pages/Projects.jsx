import React from "react";
import { FaCode, FaUniversity, FaProjectDiagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    icon: <FaCode className="text-indigo-500 text-4xl mb-4" />,
    title: "Code Editor",
    description: "A live code editor supporting HTML, CSS, and JS preview in real-time.",
    github: "https://github.com/yourusername/code-editor",
    demo: "https://code-editor-demo.vercel.app"
  },
  {
    icon: <FaUniversity className="text-indigo-500 text-4xl mb-4" />,
    title: "Bank Management System",
    description:
      "A core Java-based bank management system that handles accounts, transactions, and user operations through a console interface.",
    github: "https://github.com/Avnish-kumar-Singh/Avnish-kumar-Singh/blob/main/project_in_core_java"
  },
  {
    icon: <FaCode className="text-indigo-500 text-4xl mb-4" />,
    title: "Recipe Sharing Platform",
    description:
      "A full-stack web app where users can share, browse, and explore various recipes built using React, Node.js, and MongoDB.",
    github: "https://github.com/Avnish-kumar-Singh/FirstPrjct.git"
  },
  {
    icon: <FaProjectDiagram className="text-indigo-500 text-4xl mb-4" />,
    title: "Project Frame (Java + SQL)",
    description:
      "A structured project template built with HTML for UI, Java for logic, and SQL for backend database handling.",
    github: "https://github.com/Avnish-kumar-Singh/SelfWork.git"
  },
];

function Projects() {
  return (
    <div className="pt-28 px-4 sm:px-6 max-w-6xl mx-auto animate-fly-in">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-12 animate-fly-in delay-100">
        🚀 Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`bg-white p-6 rounded-3xl shadow-xl border border-indigo-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fly-in delay-${(idx + 1) * 100}`}
          >
            {project.icon}
            <h3 className="text-xl font-bold text-indigo-600 mb-2">{project.title}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>

            <div className="flex space-x-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 text-sm transition"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm transition flex items-center gap-1"
                >
                  <FiExternalLink className="text-white" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
