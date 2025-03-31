import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="relative w-full min-h-screen pt-20 overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-image.jpg"
          alt="Rocket Launch"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to make text more legible */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero content */}
      <div className="w-full min-h-[calc(95vh-50px)] flex flex-col justify-center items-center text-center px-10">
        <h1 className="text-6xl font-extrabold text-white mb-4">
          Welcome to Devils Ad Astra
        </h1>
        <p className="text-2xl text-white max-w-4xl mx-auto mb-8 drop-shadow">
          A student-led club dedicated to exploring the frontiers of space
          travel and innovation.
        </p>
        <Link
          href="/about"
          className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-full transition-colors hover:bg-zinc-900"
        >
          Learn More
        </Link>
      </div>
    </main>
  );
};

export default Hero;
