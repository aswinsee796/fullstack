import React from 'react';

function Description() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md bg-white shadow-md overflow-hidden rounded-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="flex">
          <div style={{ maxWidth: '80%', maxHeight: '50%', marginLeft: '35px', borderRadius: '50%', boxShadow: '0 5 5 0' }}>
            <img
              className="w-1/4 h-32 object-cover"
              src="https://i2.pickpik.com/photos/853/157/197/chess-king-match-symbolism-preview.jpg"
              alt="Course Image"
            />
          </div>
          <div className="flex flex-col p-4">
            <h3 className="text-lg font-semibold mb-2">Course Title</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit
              amet euismod lorem.
            </p>
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Level: Intermediate</span>
              <span className="text-gray-700">Duration: 10 weeks</span>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
