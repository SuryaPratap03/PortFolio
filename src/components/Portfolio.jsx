import React from "react";
import frenzymeet from "../assets/frenzymeet.webp";
import xoto from "../assets/xoto.png";
import Urbanservice from "../assets/Urbanservice.png";
import QONECT from "../assets/QONECT.webp";
import TROMS from "../assets/TROMS.webp";
import ARMPOINTS from "../assets/ARMPOINTS.webp";

const Portfolio = () => {
  const cardFiles = [
    {
      id: 1,
      logo: frenzymeet,
      name: "FrenzyMeet - Social Networking & Real-Time Communication Platform (Live On Play Store)",
      details:
        "Architected and developed the complete backend for FrenzyMeet, a social platform serving 10,000+ active users. Built scalable REST APIs using Node.js, Express.js, MongoDB, and TypeScript. Implemented real-time messaging using Socket.IO scaled with Redis Pub/Sub, and handled background jobs using Redis Bull Queue. Managed AWS infrastructure and integrated SightEngine AI for automated content moderation.",
      url: "https://play.google.com/store/apps/details?id=com.frenzymeet.live&pcampaignid=web_share",
    },
    {
      id: 2,
      logo: xoto,
      name: "XOTO - AI-Powered PropTech Platform (Live Website)",
      details:
        "Developed scalable backend services and REST APIs using Node.js, TypeScript, Express.js, and MongoDB for a UAE-based real estate ecosystem. Designed MongoDB aggregation pipelines, deployed and managed cloud infrastructure on AWS EC2, and integrated AWS S3 for secure media and document storage. Implemented authentication and role-based access control.",
      url: "https://xoto.ae",
    },
    {
      id: 3,
      logo: Urbanservice,
      name: "Urban Service - Local Experts App (Live On Play Store)",
      details:
        "Led the backend development of Urban Service, a live marketplace app connecting users with local service providers. Built in Node.js with TypeScript, the backend includes Stripe payment gateway integration, a robust recurring payment system using advanced Data Structures and Algorithms, and optimized SQL database operations via Prisma ORM. Designed and managed deployment pipelines to ensure performance, scalability, and reliability in production.",
      url: "https://play.google.com/store/apps/details?id=com.urban.services&hl=en-US&pli=1",
    },
    {
      id: 4,
      logo: TROMS,
      name: "TROMS - All-in-One Fitness Companion (Live On App Store)",
      details:
        "Developed the complete backend for TROMS, a fitness companion app available on the App Store. The platform enables users to track workouts, follow custom meal plans, and receive personalized fitness recommendations powered by integrated AI models using both Google\'s Gemini API and OpenAI\'s ChatGPT API. Implemented progress tracking and analytics for accurate performance insights, along with secure subscription management for monthly and yearly plans, each offering a 3-day free trial. Designed and deployed a robust backend architecture in Node.js with TypeScript, ensuring scalability, compliance with Apple guidelines, and seamless auto-renewal handling.",
      url: "https://apps.apple.com/us/app/troms/id6747479780",
    },
    {
      id: 5,
      logo: QONECT,
      name: "QONECT - Finance & Credit Access (Live On Play Store)",
      details:
        "Developed and deployed scalable backend APIs for Qonect, a medical credit access platform, using Node.js and TypeScript on AWS EC2. Integrated Razorpay for secure payments and third-party healthcare services for instant credit access. Ensured data security and compliance with healthcare regulations while collaborating with frontend teams to deliver a smooth user experience.",
      url: "https://play.google.com/store/apps/details?id=com.tps_connect",
    },
    {
      id: 6,
      logo: ARMPOINTS,
      name: "ARMPOINTS - Reward Application (Live On Play Store)",
      details:
        "Developed and deployed robust backend systems using Node.js and Express to manage user rewards, transactions, and analytics. Designed and implemented RESTful APIs for user authentication, reward points tracking, and transaction history management. Ensured data integrity and optimized database queries for efficient reward calculations. Deployed scalable and high-performance backend services on AWS EC2.",
      url: "https://play.google.com/store/apps/details?id=com.app.armpoint",
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
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center animate-fadeIn"
              style={{ minHeight: "420px" }}
            >
              <img
                src={file.logo}
                alt={`${file.name} Logo`}
                className="w-32 h-32 object-contain mb-4 mix-blend-multiply"
              />
              <h1 className="text-xl mb-2 font-semibold text-gray-800 text-center">
                {file.name}
              </h1>
              <p className="text-gray-700 text-center text-sm mb-4">
                {file.details}
              </p>
              <div className="mt-auto w-full flex flex-col sm:flex-row gap-3 justify-center">
                {file.sourceCode && (
                  <a
                    className="bg-blue-600 text-white py-2.5 px-6 font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center flex-1 shadow-md text-sm md:text-base"
                    href={file.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                )}
                {file.url && (
                  <a
                    className="bg-blue-600 text-white py-2.5 px-6 font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center flex-1 shadow-md text-sm md:text-base"
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
