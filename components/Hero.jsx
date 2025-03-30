import React from "react";

const Hero = () => {
  return (
    <main className="pt-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black transition-colors">
      <section className="text-center px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          Welcome to Devils Ad Astra
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          A student-led club dedicated to exploring the frontiers of space
          travel and innovation.
        </p>
      </section>
    </main>
  );
};

export default Hero;
