import React from "react";
import panchayat from "../assets/panchayat.png";
import foodmania from "../assets/foodmania.png";
import filesharingapp from "../assets/filesharingapp.png";
import RestroApp from "../assets/RestroApp.png";
import AICodereviewer from "../assets/AICodereviewer.png";
import Urbanservice from "../assets/Urbanservice.png";
import TROMS from "../assets/TROMS.webp";
const Portfolio = () => {
  const cardFiles = [
    {
      id: 1,
      logo: Urbanservice, // Replace with the imported logo variable for Urban Service
      name: "Urban Service - Local Experts App",
      details:
        "Led the backend development of Urban Service, a live marketplace app connecting users with local service providers. Built in Node.js with TypeScript, the backend includes Stripe payment gateway integration, a robust recurring payment system using advanced Data Structures and Algorithms, and optimized SQL database operations via Prisma ORM. Designed and managed deployment pipelines to ensure performance, scalability, and reliability in production.",
      url: "https://play.google.com/store/apps/details?id=com.urban.services&hl=en-US&pli=1",
    },
    {
      id: 2,
      logo: panchayat,
      name: "Panchayat - Chat App",
      details:
        "Developed a real-time chat application using the MERN stack and Socket.IO, allowing users to join multiple rooms, exchange messages instantly, and view timestamps. Integrated Cloudinary for profile image uploads and designed a responsive UI for a seamless experience across devices.",
      sourceCode: "https://github.com/SuryaPratap03/FileSharingApp",
      url: "https://fastidious-blancmange-74d464.netlify.app/",
    },
    {
      id: 3,
      logo: AICodereviewer,
      name: "A.I. Code Reviewer 🤖 ",
      details:
        "Developed an AI-powered code review platform using Node.js for the backend and React for the frontend, integrated with the Gemini API to provide intelligent feedback on code. The platform analyzes code to highlight strengths, suggest improvements, and detect errors, making it a valuable tool for students to enhance their learning and for professionals to improve efficiency in their current jobs or prepare for interviews. Implemented responsive UI with React, ensured seamless API communication, and deployed the application for public use, allowing users to benefit from instant, actionable coding insights.",
      sourceCode: "https://github.com/SuryaPratap03/AI-Code-Reviewer",
      url: "https://ai-code-reviewer-five-beta.vercel.app/",
    },
    {
      id: 4,
      logo: TROMS,
      name: "TROMS - All-in-One Fitness Companion'",
      details:
        "Developed the complete backend for TROMS, a fitness companion app available on the App Store. The platform enables users to track workouts, follow custom meal plans, and receive personalized fitness recommendations powered by integrated AI models using both Google\'s Gemini API and OpenAI\'s ChatGPT API. Implemented progress tracking and analytics for accurate performance insights, along with secure subscription management for monthly and yearly plans, each offering a 3-day free trial. Designed and deployed a robust backend architecture in Node.js with TypeScript, ensuring scalability, compliance with Apple guidelines, and seamless auto-renewal handling.",
      url: "https://apps.apple.com/us/app/troms/id6747479780",
    },
  ];

  return (
    <div name="Portfolio" className="bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Portfolio</h1>
        <span className="underline text-blue-600 text-lg hover:text-blue-500 transition duration-300">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {cardFiles.map((file) => (
            <div
              key={file.id}
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center"
              style={{ minHeight: "400px" }}
            >
              <img
                src={file.logo}
                alt={`${file.name} Logo`}
                className="w-32 h-32 object-contain mb-4"
              />
              <h1 className="text-xl mb-2 font-semibold text-gray-800 text-center">
                {file.name}
              </h1>
              <p className="text-gray-700 text-center text-sm mb-4">
                {file.details}
              </p>
              <div className="mt-auto flex space-x-4">
                <a
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
                  href={file.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
                <a
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300"
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
