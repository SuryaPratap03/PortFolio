import React from 'react';
import cpp from '../assets/cpp_logo.png';
import express from '../assets/express.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import mongodb from '../assets/mongodb.jpg';
import nodejs from '../assets/node.png';
import react from '../assets/reactjs.png';

const Portfolio = () => {
  const cardFiles = [
    {
      id: 1,
      logo: mongodb,
      name: 'MongoDB',
      details:'rabdom data'
    },
    {
      id: 2,
      logo: cpp,
      name: 'C++',
      details:'rabdom data'
    },
    {
      id: 3,
      logo: express,
      details:'rabdom data',
      name: 'Express.js'
    },
    {
      id: 4,
      logo: html,
      details:'rabdom data',
      name: 'HTML'
    },
    {
      id: 5,
      logo: java,
      name: 'Java',
      details:'rabdom data'
    },
    {
      id: 6,
      logo: javascript,
      name: 'JavaScript',
      details:'rabdom data'
    },
    {
      id: 7,
      logo: nodejs,
      name: 'Node.js',
      details:'rabdom data'
    },
    {
      id: 8,
      logo: react,
      name: 'React.js',
      details:'rabdom data'
    },
  ];

  return (
    <div name='Portfolio' className="bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Portfolio</h1>
        <span className="underline text-blue-600 text-lg hover:text-blue-500 transition duration-300">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {cardFiles.map((file) => (
            <div
              key={file.id}
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={file.logo}
                alt={`${file.name} Logo`}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{file.name}</h2>
              <p className=" text-gray-800">{file.details}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300">
                  Source Code
                </button>
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
