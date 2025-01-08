// src/pages/Error404.jsx
import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-6">Page Under Construction</h1>
      <p className="text-xl text-gray-600 mb-8">
        We are working hard to bring this page to life. Stay tuned!
      </p>
      <img
        src="https://via.placeholder.com/400x300"
        alt="Under Construction"
        className="mb-8"
      />
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded hover:bg-blue-700 transition"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default Error404;
