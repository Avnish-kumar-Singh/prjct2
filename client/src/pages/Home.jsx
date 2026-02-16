import React from "react";
import myImage from "../assets/me.jpg";

function Home() {
  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fly-in delay-100">
            Hey, I'm Avnish  👋
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-fly-in delay-200">
            I'm a passionate <strong>Java Backend Developer/ SDE</strong> skilled in{" "}
            <span className="text-indigo-300 font-semibold">Java, javaScript, React</span>, and more.  
            I love building scalable, modern, and user-centric applications with stunning UI.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block bg-indigo-600 text-white text-lg px-6 py-3 rounded-xl shadow-xl hover:bg-indigo-700 hover:scale-105 transform transition duration-300 animate-fly-in delay-300"
          >
            📄 Download Resume
          </a>

          {/* About Me Paragraph */}
          <div className="mt-8 text-gray-200 text-justify text-md leading-relaxed animate-fade-in delay-500">
            <p className="mb-4">
              I'm currently pursuing my degree in Computer Science, where I’ve developed a solid foundation in data structures algorithms and software engineering principles. Beyond academics, I actively work on personal projects and enjoy exploring new technologies in Java Backend Development, web development and AI.
            </p>
            <p>
              I thrive in collaborative environments and love solving real-world problems with clean, efficient code. Whether it's building responsive user interfaces with React or designing RESTful APIs using Node.js/ Spring Boot and MongoDB, I'm always eager to learn and take on new challenges. My goal is to create meaningful digital experiences that have a positive impact on people’s lives.
            </p>
          </div>
        </div>

        {/* Circular Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={myImage}
            alt="Avnish Kumar"
            className="w-72 h-72 object-cover rounded-full border-4 border-indigo-400 shadow-2xl hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
