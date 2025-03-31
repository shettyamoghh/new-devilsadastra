import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-20 bg-[url('/space-bg.jpg')] bg-cover bg-center">
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-6 py-12">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-white mt-10">
              About Devils Ad Astra
            </h1>
            <p className="mt-4 text-lg text-white">
              Empowering students to explore the cosmos
            </p>
          </header>

          {/* About Content */}
          <section className="grid gap-8 md:grid-cols-2 items-center">
            <div className="mt-10 flex justify-center">
              <div className="space-y-6 max-w-lg">
                <p className="text-lg text-white">
                  Devils Ad Astra is a student-led club at Arizona State
                  University, dedicated to exploring the frontiers of space
                  travel and innovation. Our mission is to inspire, educate, and
                  empower the next generation of space enthusiasts by providing
                  opportunities for hands-on projects, collaborations with
                  industry experts, and participation in cutting-edge research.
                </p>
                <p className="text-lg text-white">
                  We design spacecraft models, organize events with renowned
                  experts, and foster a community where creativity meets
                  exploration.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <img
                src="/rockets.jpg"
                alt="Club members collaborating on a space project"
                className="w-full max-w-lg rounded-lg shadow-lg object-cover"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
