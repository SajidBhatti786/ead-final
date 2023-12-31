// Import the necessary React and Tailwind CSS modules
import React from "react";

// Import the styles from the generated tailwind.css file
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

// Define your React component
const MyComponent = () => {
  return (
    <div className="bg-blue-500 p-4 rounded-md shadow-lg">
      <h1 className="text-2xl text-white font-bold">Hello, Tailwind CSS!</h1>
      <p className="text-white mt-2">
        This is a basic React component with Tailwind CSS styles.
      </p>
    </div>
  );
};

export default MyComponent;
