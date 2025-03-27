import React from 'react';
import user from '../assets/photo.avif';
import { MdFileDownload } from "react-icons/md";

const About = () => {
  
  return (
    <div name="About" className="bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-6 md:space-y-8">
            
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">About</h1>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I am a passionate full-stack developer skilled in the MERN stack, Next.js, and a strong foundation in Data Structures and Algorithms. 
              I specialize in building scalable applications with clean code, optimizing performance, and creating dynamic, responsive user interfaces.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">Internship Experience</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I worked as a <strong>full-stack developer intern</strong> at 
              <a href="https://weteams.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> WeTeams </a> 
              in Jaipur, where I handled tasks typically assigned to senior developers. 
              During this internship, I independently developed their entire project using the <strong>MERN stack</strong> without any senior developer's guidance. 
              I gained valuable experience working with large-scale, legacy codebases and improved my skills in managing and optimizing complex applications.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">Contact Information</h2>
            <ul className="list-none space-y-2">
              <li>Email: <a href="mailto:sp7763360@gmail.com" className="text-blue-600 hover:underline">sp7763360@gmail.com</a></li>
              <li>GitHub Profile: <a href="https://github.com/SuryaPratap03" className="text-blue-600 hover:underline">https://github.com/SuryaPratap03</a></li>
              <li>Portfolio: <a href="https://brilliant-wisp-bb3766.netlify.app" className="text-blue-600 hover:underline">https://brilliant-wisp-bb3766.netlify.app</a></li>
            </ul>

            <h2 className="text-blue-600 font-bold text-2xl">Career Objective</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Aspiring IT professional seeking an entry-level position to utilize my technical skills in full-stack development. 
              Eager to contribute to innovative projects, enhance my knowledge, and grow alongside a talented team.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">Educational Qualifications</h2>
            <ul className="list-none space-y-2">
              <li>Master of Science in Information Technology (M.Sc IT) - Aryabhatta College, Ajmer (Currently pursuing)</li>
              <li>Bachelor of Science in Mathematics (B.Sc) - DAV College, Ajmer (Graduated with 64%)</li>
              <li>Higher Secondary (12th Grade) - Central Academy CBSE School, Ajmer (72% PCM)</li>
              <li>Secondary (10th Grade) - Central Academy CBSE School, Ajmer (9.0 CGPA / 90%)</li>
            </ul>

            <h2 className="text-blue-600 font-bold text-2xl">Soft Skills</h2>
            <ul className="list-none space-y-2">
              <li>Fluent in English</li>
              <li>Excellent communication skills</li>
              <li>Strong analytical and problem-solving abilities</li>
              <li>Team player with collaboration skills</li>
              <li>Adaptable and quick learner</li>
              <li>Effective time management and organizational skills</li>
            </ul>

            {/* Skills & Expertise Section */}
            <h2 className="text-blue-600 font-bold text-2xl mt-8">Skills & Expertise</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
              With a solid foundation in web development, I have honed my skills across a wide range of technologies, including:
            </p>

            <ul className="list-none space-y-2 mt-4">
              <li><span className="font-bold">Frontend Development:</span> React, Next.js, Tailwind CSS, and Material UI.</li>
              <li><span className="font-bold">Backend Development:</span> Node.js, Express.js, MongoDB, and RESTful APIs.</li>
              <li><span className="font-bold">Full-Stack Development:</span> MERN stack with state management using Redux Toolkit.</li>
              <li><span className="font-bold">Data Structures & Algorithms:</span> Problem-solving skills with expertise in JavaScript, C, and Java.</li>
              <li><span className="font-bold">Version Control:</span> Git and GitHub for efficient code management and collaboration.</li>
              <li><span className="font-bold">Database Management:</span> NoSQL databases with MongoDB and Mongoose ODM.</li>
              <li><span className="font-bold">Testing & Debugging:</span> Experience with unit and integration testing using Jest and Mocha.</li>
              <li><span className="font-bold">Agile & Scrum:</span> Familiar with Agile methodologies and Scrum practices.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
