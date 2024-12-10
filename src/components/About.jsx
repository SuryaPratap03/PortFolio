import React from 'react';
import user from '../assets/photo.avif';
import { MdFileDownload } from "react-icons/md";

const About = () => {
  
  return (
    <div name='About' className="bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Left Section (Text) */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">About</h1>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I am a passionate MERN stack developer with a strong foundation in Data Structures and Algorithms. I specialize in building scalable applications, crafting intuitive user interfaces with React, and developing robust backend systems with Node.js and MongoDB. My goal is to create efficient and impactful solutions while continuously learning and growing as a developer.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">Contact Information</h2>
            <ul className="list-none space-y-2">
              <li><strong>Email:</strong> <a href="mailto:sp7763360@gmail.com" className="text-blue-600 hover:underline">sp7763360@gmail.com</a></li>
              <li><strong>GITHUB Profile:</strong> <a href="https://github.com/SuryaPratap03" className="text-blue-600 hover:underline">https://github.com/SuryaPratap03</a></li>
              <li><strong>Twitter:</strong> <a href="https://x.com/SuryaPratap300" className="text-blue-600 hover:underline">https://x.com/SuryaPratap300</a></li>
            </ul>

            <h2 className="text-blue-600 font-bold text-2xl">Career Objective</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Aspiring IT professional seeking an entry-level position to utilize my technical skills in software development and problem-solving abilities. Eager to contribute to innovative projects, enhance my knowledge in a dynamic environment, and grow alongside a team of talented professionals in a leading tech company.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">Educational Qualifications</h2>
            <ul className="list-none space-y-2">
              <li><strong>Master of Science in Information Technology (M.Sc IT)</strong> - Aryabhatta College, Ajmer (Currently pursuing)</li>
              <li><strong>Bachelor of Science in Mathematics (B.Sc)</strong> - DAV College, Ajmer (Graduated with 64%)</li>
              <li><strong>Higher Secondary (12th Grade)</strong> - Central Academy CBSE School, Ajmer (72% PCM)</li>
              <li><strong>Secondary (10th Grade)</strong> - Central Academy CBSE School, Ajmer (9.0 CGPA / 90%)</li>
            </ul>

            <h2 className="text-blue-600 font-bold text-2xl">Soft Skills</h2>
            <ul className="list-none space-y-2">
              <li>Fluent in English</li>
              <li>Excellent communication skills</li>
              <li>Strong analytical and problem-solving abilities</li>
              <li>Team player with excellent collaboration skills</li>
              <li>Adaptable and quick learner</li>
              <li>Effective time management and organizational skills</li>
            </ul>

            {/* Skills & Expertise Section */}
            <h2 className="text-blue-600 font-bold text-2xl mt-8">Skills & Expertise</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
              With a solid foundation in computer science and a strong passion for software development, I have honed my skills across a wide range of technologies and methodologies. I specialize in the following:
            </p>

            <ul className="list-none space-y-2 mt-4">
              <li><strong>Frontend Development:</strong> Expertise in building responsive and interactive user interfaces with React, Tailwind CSS, and Material UI. Skilled in creating seamless, dynamic web applications with clean and maintainable code.</li>
              <li><strong>Backend Development:</strong> Proficient in building scalable and efficient backend systems using Node.js, Express, and MongoDB. Experienced in developing RESTful APIs, integrating third-party services, and optimizing application performance.</li>
              <li><strong>MERN Stack:</strong> Full-stack development experience using MongoDB, Express.js, React, and Node.js (MERN stack). Comfortable working with server-side and client-side technologies to create end-to-end web applications.</li>
              <li><strong>Data Structures & Algorithms:</strong> Strong foundation in algorithms and problem-solving with experience in optimizing solutions. Proficient in implementing data structures and algorithms in Java, C, and JavaScript to solve real-world problems.</li>
              <li><strong>Version Control & Collaboration:</strong> Proficient in using Git and GitHub for version control, collaborating with teams, and managing code repositories effectively.</li>
              <li><strong>Database Management:</strong> Experienced with NoSQL databases like MongoDB, focusing on efficient data modeling, CRUD operations, and database optimization techniques.</li>
              <li><strong>Testing & Debugging:</strong> Knowledge of testing frameworks like Jest, Mocha, and Chai. Skilled in writing unit and integration tests to ensure application reliability and performance.</li>
              <li><strong>Agile & Scrum:</strong> Familiar with Agile methodologies and Scrum framework, participating in sprints, daily standups, and contributing to team collaboration and productivity.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
