import React from "react";
import user from "../assets/photo.avif";
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
              I am a passionate Node.js backend developer with expertise in the
              MERN stack, Next.js, and a solid foundation in Data Structures and
              Algorithms. I specialize in designing and developing scalable
              backend architectures, integrating secure payment systems and
              AI-powered features, optimizing database performance, and
              delivering clean, maintainable code for dynamic, responsive
              applications.
            </p>

            <h2 className="text-blue-600 font-bold text-2xl">
              Work Experience
            </h2>

            {/* Urban Service Project */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
  At{" "}
  <a
    href="https://dotcubetechnologies.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    DotCube Technologies
  </a>
  , I’ve confidently taken full ownership of backend systems—leading
  architecture, development, and delivery with precision and reliability. I
  spearheaded the backend for the live app{" "}
  <a
    href="https://play.google.com/store/apps/details?id=com.urban.services&hl=en-US&pli=1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Urban Service: Local Experts
  </a>
  , building the complete backend in{" "}
  <strong>Node.js with TypeScript</strong>. My work included seamless
  integration of <strong>Stripe</strong> for payments and designing a reliable
  recurring payment flow using advanced{" "}
  <strong>Data Structures and Algorithms</strong>. I optimized data handling
  with an <strong>SQL database</strong> via <strong>Prisma ORM</strong>,
  ensuring performance and scalability, while managing deployment pipelines
  and production hosting on AWS.
</p>

{/* TROMS Project */}
<p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-6">
  Additionally, I developed the complete backend for{" "}
  <a
    href="https://apps.apple.com/us/app/troms/id6747479780"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    TROMS – All-in-One Fitness Companion
  </a>
  , an App Store–listed fitness platform. I implemented AI-powered features
  using <strong>Google’s Gemini API</strong> and{" "}
  <strong>OpenAI’s ChatGPT API</strong> to generate personalized workout and
  meal recommendations. Built progress tracking and analytics systems, managed
  secure subscriptions with free trials and auto-renewals, and ensured Apple
  compliance. The backend, built with <strong>Node.js and TypeScript</strong>,
  was engineered for scalability, reliability, and seamless frontend
  integration.
</p>

{/* Qonect Project */}
<p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-6">
  I also developed backend APIs for{" "}
  <strong>Qonect</strong> (
  <a
    href="https://play.google.com/store/apps/details?id=com.tps_connect"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Live on Play Store
  </a>
  ), a medical credit access app. Built using{" "}
  <strong>Node.js and TypeScript</strong>, it integrated{" "}
  <strong>Razorpay</strong> and third-party healthcare services to provide
  users with instant access to medical credit. Ensured compliance with
  healthcare data regulations and deployed scalable, secure services on{" "}
  <strong>AWS EC2</strong> for high availability and performance.
</p>

{/* ArmPoints Project */}
<p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-6">
  I also built the backend for{" "}
  <strong>ArmPoints</strong> (
  <a
    href="https://play.google.com/store/apps/details?id=com.app.armpoint"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Live on Play Store
  </a>
  ), a reward management application. Developed RESTful APIs using{" "}
  <strong>Node.js and Express</strong> to handle user authentication, reward
  tracking, and transaction analytics. Focused on data integrity, optimized
  query performance, and deployed scalable backend services on{" "}
  <strong>AWS EC2</strong> to ensure efficient and reliable performance.
</p>

<p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
  I excel at tackling complex backend challenges—from architecture and API
  design to optimization and deployment—with a strong sense of ownership and a
  delivery-driven mindset.
</p>


            <h2 className="text-blue-600 font-bold text-2xl">
              Internship Experience
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I worked as a <strong>full-stack developer intern</strong> at
              <a
                href="https://weteams.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {" "}
                WeTeams{" "}
              </a>
              in Jaipur, where I handled tasks typically assigned to senior
              developers. During this internship, I independently developed
              their entire project using the <strong>MERN stack</strong> without
              any senior developer's guidance. I gained valuable experience
              working with large-scale, legacy codebases and improved my skills
              in managing and optimizing complex applications.
            </p>

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
              Skills & Expertise
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
              With a solid foundation in web development, I have honed my skills
              across a wide range of technologies, including:
            </p>

            <ul className="list-none space-y-2 mt-4">
              <li>
                <span className="font-bold">Generative AI Development:</span>{" "}
                Experience working with AI models and APIs, including Google's
                Gemini API and OpenAI's ChatGPT API (GPT-3.5-Turbo and GPT-4.0),
                for building intelligent and interactive applications.
              </li>
              <li>
                <span className="font-bold">Frontend Development:</span> React,
                Next.js, Tailwind CSS, Material UI, and TypeScript.
              </li>
              <li>
                <span className="font-bold">Backend Development:</span> Node.js,
                Express.js, MongoDB, RESTful APIs, and TypeScript.
              </li>
              <li>
                <span className="font-bold">Full-Stack Development:</span> MERN
                stack with state management using Redux Toolkit.
              </li>
              <li>
                <span className="font-bold">Payment Gateway Integration:</span>{" "}
                Stripe integration with recurring payment flows and secure
                transaction handling.
              </li>
              <li>
                <span className="font-bold">Data Structures & Algorithms:</span>{" "}
                Problem-solving skills with expertise in JavaScript, C, and
                Java.
              </li>
              <li>
                <span className="font-bold">Version Control:</span> Git and
                GitHub for efficient code management and collaboration.
              </li>
              <li>
                <span className="font-bold">Database Management:</span> NoSQL
                databases with MongoDB and Mongoose ODM, SQL databases with
                Prisma ORM.
              </li>
              <li>
                <span className="font-bold">Testing & Debugging:</span>{" "}
                Experience with unit and integration testing using Jest and
                Mocha.
              </li>
              <li>
                <span className="font-bold">Agile & Scrum:</span> Familiar with
                Agile methodologies and Scrum practices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
