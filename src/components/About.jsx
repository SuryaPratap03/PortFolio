import React from "react";
import user from "../assets/photo.png";
import { MdFileDownload } from "react-icons/md";

const About = () => {
  return (
    <div name="About" className="bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
              About
            </h1>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Backend Developer with hands-on experience building and scaling production-grade applications using Node.js, TypeScript, Express.js, MongoDB, SQL, and AWS. Proven expertise in designing high-performance REST APIs, MongoDB Aggregation Pipelines, real-time systems with Socket.IO, distributed architectures using Redis Pub/Sub and Bull Queue, and cloud-native deployments. Experienced in payment gateway integrations, AI-powered content moderation, database optimization, and backend systems serving thousands of users. Strong track record of delivering scalable, secure, and reliable applications across Social Media, PropTech, HealthTech, Marketplace, and Reward-based platforms.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">
              Work Experience
            </h2>

            {/* DQOT Solutions */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                MERN Stack Developer at{" "}
                <span className="text-blue-600">DQOT Solutions</span>
              </h3>
              <span className="text-gray-500 text-sm">March 2026 – Present</span>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-2">
                Architected and developed the complete backend for <strong>FrenzyMeet</strong>, a social networking and real-time communication platform serving 10,000+ active users. Designed and built scalable REST APIs using Node.js, Express.js, MongoDB, and TypeScript for user management, messaging, content feeds, and platform operations. Built complex MongoDB Aggregation Pipelines and optimized database queries to reduce response times. Managed AWS infrastructure including EC2 deployments, MongoDB hosting on Atlas, and AWS S3 integration. Implemented real-time messaging using Socket.IO with Redis Pub/Sub, and handled asynchronous background jobs with Redis Bull Queue. Integrated SightEngine AI for automated content moderation and managed Google Play Console releases.
              </p>
            </div>

            {/* Kotibox Global Technologies */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                MERN Stack Team Lead at{" "}
                <span className="text-blue-600">Kotibox Global Technologies</span>
              </h3>
              <span className="text-gray-500 text-sm">January 2026 – February 2026</span>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-2">
                Led a team of 4 developers in the development of <strong>XOTO</strong>, a UAE-based AI-powered PropTech real estate platform. Designed and built scalable REST APIs using Node.js, TypeScript, Express.js, and MongoDB. Implemented authentication, role-based access control, and core business workflows. Configured AWS EC2 and S3 for secure file/media storage, optimized database queries, and conducted regular code reviews to ensure successful project delivery.
              </p>
            </div>

            {/* DotCube Technologies */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                NodeJS Backend Developer at{" "}
                <a
                  href="https://dotcubetechnologies.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  DotCube Technologies
                </a>
              </h3>
              <span className="text-gray-500 text-sm">April 2025 – December 2025</span>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-2">
                Took full ownership of backend systems, designing and deploying scalable backend architectures for production web and mobile applications using Node.js, TypeScript, MongoDB, and SQL. Key contributions and projects included:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700 text-lg md:text-xl leading-relaxed">
                <li>
                  <strong>Urban Service (Local Experts):</strong> Spearheaded backend development in Node.js & TypeScript. Integrated Stripe payment gateway with a robust recurring payment system using advanced Data Structures and Algorithms. Optimized SQL database operations using Prisma ORM and managed AWS production deployments.
                </li>
                <li>
                  <strong>TROMS (Fitness Companion):</strong> Built the complete backend. Integrated Google Gemini and OpenAI ChatGPT APIs for AI-powered recommendations. Designed secure subscription management and progress analytics.
                </li>
                <li>
                  <strong>Qonect:</strong> Engineered APIs and backend workflows for a medical credit access app, integrating Razorpay and third-party healthcare services on AWS EC2.
                </li>
                <li>
                  <strong>ArmPoints (Reward App):</strong> Developed backend systems using Node.js and Express to manage rewards tracking, user authentication, and transaction history.
                </li>
              </ul>
            </div>

            <h2 className="text-blue-600 font-bold text-2xl mt-8">
              Internship Experience
            </h2>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                MERN Full Stack Intern at{" "}
                <a
                  href="https://weteams.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  WeTeams
                </a>
              </h3>
              <span className="text-gray-500 text-sm">January 2025 – March 2025</span>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-2">
                Worked on MERN stack applications and maintained a large legacy codebase. Developed backend features, REST APIs, and React-based frontend components while independently resolving complex technical issues and delivering production-ready solutions without senior developer guidance.
              </p>
            </div>

            <h2 className="text-blue-600 font-bold text-2xl">
              Contact Information
            </h2>
            <ul className="list-none space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:sp7763360@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  sp7763360@gmail.com
                </a>
              </li>
              <li>
                GitHub Profile:{" "}
                <a
                  href="https://github.com/SuryaPratap03"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/SuryaPratap03
                </a>
              </li>
              <li>
                Portfolio:{" "}
                <a
                  href="https://brilliant-wisp-bb3766.netlify.app"
                  className="text-blue-600 hover:underline"
                >
                  https://brilliant-wisp-bb3766.netlify.app
                </a>
              </li>
            </ul>

            <h2 className="text-blue-600 font-bold text-2xl">
              Career Objective
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Motivated backend developer with strong expertise in Node.js, TypeScript, and modern web technologies, seeking a challenging position to build scalable, high-performance systems. Passionate about solving complex problems, contributing to impactful projects, and continuously growing as part of an innovative engineering team.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">
              Educational Qualifications
            </h2>
            <ul className="list-none space-y-2">
              <li>
                Master of Science in Information Technology (M.Sc IT) -
                Aryabhatta College, Ajmer (Currently pursuing)
              </li>
              <li>
                Bachelor of Science in Mathematics (B.Sc) - DAV College, Ajmer
                (Graduated with 64%)
              </li>
              <li>
                Higher Secondary (12th Grade) - Central Academy CBSE School,
                Ajmer (72% PCM)
              </li>
              <li>
                Secondary (10th Grade) - Central Academy CBSE School, Ajmer (9.0
                CGPA / 90%)
              </li>
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
            <h2 className="text-blue-600 font-bold text-2xl mt-8">
              Technical Skills & Expertise
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
              A comprehensive view of my technical skillset, tools, and methodologies:
            </p>

            <ul className="list-none space-y-4 mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
              <li>
                <span className="font-bold">Programming Languages:</span> JavaScript, TypeScript
              </li>
              <li>
                <span className="font-bold">Backend Development:</span> Node.js, Express.js, REST API Development, Microservices, Authentication & Authorization (JWT, OAuth), Real-Time Systems, Scalable Backend Architecture
              </li>
              <li>
                <span className="font-bold">Databases:</span> MongoDB, MongoDB Aggregation Pipelines, SQL, Database Design, Query Optimization, Indexing, Prisma ORM, Mongoose
              </li>
              <li>
                <span className="font-bold">Distributed Systems & Caching:</span> Redis, Redis Pub/Sub, Bull Queue, Socket.IO, Background Job Processing
              </li>
              <li>
                <span className="font-bold">Cloud & DevOps:</span> AWS EC2, AWS S3, MongoDB Atlas, Docker, Nginx, PM2, CI/CD Pipelines, DigitalOcean
              </li>
              <li>
                <span className="font-bold">Payment Systems:</span> Stripe Integration, Razorpay Integration, Subscription Management, Recurring Payments, Auto-Renewal Handling
              </li>
              <li>
                <span className="font-bold">AI & Third-Party Integrations:</span> OpenAI API, Google Gemini API, SightEngine AI, Third-Party API Integration
              </li>
              <li>
                <span className="font-bold">Tools & Technologies:</span> Git, GitHub, Postman, Cloudinary
              </li>
              <li>
                <span className="font-bold">Core Computer Science:</span> Data Structures & Algorithms, System Design, Performance Optimization, Scalable System Architecture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
