import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
  SiExpress,
  SiC,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-purple-600 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-red-600 text-4xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700 text-4xl" /> },
  { name: "C", icon: <SiC className="text-blue-500 text-4xl" /> },
  {
    name: "AI & ML",
    icon: <SiTensorflow className="text-orange-400 text-4xl" />,
  },
  {
    name: "DSA Problem Solving",
    icon: <span className="text-4xl">📘</span>,
  },
];

function Skills() {
  return (
    <div className="pt-28 px-4 sm:px-6 max-w-6xl mx-auto animate-fade-in">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">
        💻 Skills & Technologies
      </h2>

      {/* DSA Statement */}
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        I’ve solved over <strong>250+</strong> DSA problems on platforms like{" "}
        <a
          href="https://leetcode.com/u/avnishkumar86030/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 underline hover:text-indigo-800"
        >
          LeetCode
        </a>{" "}
        and{" "}
        <a
          href="https://www.geeksforgeeks.org/user/avnishk8gcf/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline hover:text-green-800"
        >
          GeeksforGeeks
        </a>
        . I regularly practice algorithms, data structures, and participate in coding contests.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
          >
            {skill.icon}
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
