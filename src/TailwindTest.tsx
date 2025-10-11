import React from 'react';

const TailwindTest = () => {
  return (
    <div className="bg-blue-500 text-white p-4 m-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">🎉 Tailwind CSS Test</h2>
      <p className="text-lg">
        If you see this with blue background, white text, and rounded corners, 
        Tailwind CSS v4.1.14 is working correctly!
      </p>
      <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
        Test Button
      </button>
    </div>
  );
};

export default TailwindTest;
