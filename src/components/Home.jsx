import React from 'react';
import user from '../assets/photo.avif';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <div name='Home' className="flex flex-col md:flex-row items-center justify-center bg-blue-50 min-h-screen px-6 py-12 mt-14">

      {/* Left Section (Text) */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-10 px-4 md:pl-20 ">  {/* Added md:pl-20 for right shift */}
        <span className="text-blue-600 text-xl font-medium uppercase tracking-wide">
          Welcome To My Feed
        </span>
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hello, I'm a <span className="text-blue-800">
            <ReactTyped
              strings={['Developer...', 'Software Engineer...', 'Problem Solver...', 'Programmer...', 'Coder.']}
              typeSpeed={40}
              backSpeed={50}
              backDelay={1000}
              loop
            />
            </span>
          </h1>
        </div>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          I'm a proficient full-stack developer with expertise in Node.js, TypeScript, React.js, Next.js, Express.js, MongoDB, SQL, and Prisma ORM. I have hands-on experience in building scalable backend systems, RESTful APIs, payment integrations (Stripe & Razorpay), AI-powered features (Google Gemini API & OpenAI ChatGPT API), and secure subscription management. Passionate about problem-solving and delivering high-quality solutions, and driven to create impactful, real-world projects.
        </p>

        {/* Social Media and Working Stack Sections */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-12 md:space-y-0">

          {/* Social Media Icons (Left on Desktop) */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-5">
            <h2 className="text-xl font-semibold text-blue-800">Available on</h2>
            <div className="flex justify-center md:justify-start space-x-8 text-3xl text-blue-800">
              <a href="http://facebook.com"><FaFacebook className="hover:text-blue-600 cursor-pointer" /></a>
              <a href="https://www.linkedin.com/in/surya-pratap-singh-7b5810213/"><FaLinkedin className="hover:text-blue-600 cursor-pointer" /></a>
              <a href="https://x.com/SuryaPratap300"><FaTwitter className="hover:text-blue-600 cursor-pointer" /></a>
              <a href="https://wa.me/919785408712"><IoLogoWhatsapp className="hover:text-green-500 cursor-pointer" /></a>
            </div>
          </div>

          {/* Working Stack (Right on Desktop) */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end space-y-5">
            <h2 className="text-xl font-semibold text-blue-800">Currently Working On</h2>
            <div className="flex justify-center md:justify-end space-x-8 text-4xl text-blue-800">
              <DiMongodb className="hover:text-green-700 cursor-pointer" />
              <FaReact className="hover:text-blue-600 cursor-pointer" />
              <SiExpress className="hover:text-gray-800 cursor-pointer" />
              <FaNodeJs className="hover:text-green-500 cursor-pointer" />
            </div>
          </div>

        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:pl-24 md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <div className="bg-blue-100 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center shadow-lg">
          <img
            src={user}
            alt="Profile"
            className="rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
