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
import {ReactTyped} from 'react-typed';

const Home = () => {
  return (
    <div name='Home' className="flex flex-col md:flex-row items-center justify-center bg-blue-50 min-h-screen px-6 py-12">
      {/* Left Section (Text) */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 ml-4 md:ml-12">
        <span className="text-blue-600 text-lg font-medium uppercase tracking-wide">
          Welcome To My Feed
        </span>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Hello, I'm a <span className="text-blue-800">
            <ReactTyped
              strings={['Developer...', 'Software Engineer...', 'Problem Solver...', 'Programmer...','Coder.']}
              typeSpeed={40}
              backSpeed={50}
              backDelay={1000}
              loop
            />
            </span>
          </h1>
        </div>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Surya Pratap Singh is a skilled MERN stack developer with a strong foundation in Data Structures and Algorithms (DSA). He specializes in building scalable applications, crafting responsive user interfaces with React, and implementing robust backend systems using Node.js and MongoDB. Passionate about learning and problem-solving, he is driven to create impactful, real-world projects.
        </p>

        {/* Social Media and Working Stack Sections */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12">
          {/* Social Media Icons */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-blue-800">Available on</h2>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl text-blue-800">
              <a href="http://facebook.com"><FaFacebook className="hover:text-blue-600 cursor-pointer" /></a>
              <a href="http://linkedin.com"><FaLinkedin className="hover:text-blue-600 cursor-pointer" /></a>
             <a href="https://x.com/SuryaPratap300"> <FaTwitter className="hover:text-blue-600 cursor-pointer" /></a>
             <a href="https://web.whatsapp.com/"><IoLogoWhatsapp className="hover:text-green-500 cursor-pointer" /></a>
            </div>
          </div>

          {/* Working Stack */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-blue-800">Currently Working On</h2>
            <div className="flex justify-center md:justify-start space-x-6 text-3xl text-blue-800">
              <DiMongodb className="hover:text-green-700 cursor-pointer" />
              <FaReact className="hover:text-blue-600 cursor-pointer" />
              <SiExpress className="hover:text-gray-800 cursor-pointer" />
              <FaNodeJs className="hover:text-green-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0 mr-4 md:mr-12">
        <div className="bg-blue-100 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center shadow-lg">
          <img
            src={user}
            alt="Profile"
            className="profile-image rounded-full w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
