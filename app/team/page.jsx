"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Dharmesh Chowdhary",
    designation: "Rocketry Planning Team",
    image: "/dharmesh.png",
    description:
      "Dharmesh focuses on propulsion systems, safety protocols, and test procedures to ensure reliable rocket performance.",
    linkedin: "https://www.linkedin.com/in/dharmesh-chowdhary/",
  },
  {
    name: "Vivek Nagaral",
    designation: "Rocketry Planning Team",
    image: "/vivek.png",
    description:
      "Vivek oversees mission planning and trajectory calculations, ensuring each rocket design meets performance goals from concept to launch.",
    linkedin: "https://www.linkedin.com/in/vivenagaral/",
  },
  {
    name: "Amogh Shetty",
    designation: "Web Development Team",
    image: "/amogh.jpg",
    description:
      "Amogh leads the website's design and development, ensuring our digital presence is robust, user-friendly, and visually appealing.",
    linkedin: "https://www.linkedin.com/in/shetty-amogh/",
  },
  {
    name: "Smit Desai",
    designation: "Web Development Team",
    image: "/smit.jpg",
    description:
      "Smit leads the website's design and development, ensuring our digital presence is robust, user-friendly, and visually appealing.",
    linkedin: "https://www.linkedin.com/in/smitldesai4372/",
  },
];

export default function Team() {
  return (
    <>
      <Navbar />
      <style jsx global>{`
        @keyframes riseUp {
          0% {
            opacity: 0;
            transform: translateY(2rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-riseUp {
          animation: riseUp 0.5s ease-out forwards;
        }
      `}</style>

      <main className="relative min-h-screen pt-20 bg-[url('/space-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-6 py-12 mt-10">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-white">Our Team</h1>
            <p className="mt-4 text-lg text-white">
              Meet the brilliant minds behind Devils Ad Astra.
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:-translate-y-2 opacity-0 translate-y-6 animate-riseUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="bg-white h-full min-h-[450px] flex flex-col justify-between p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div className="mt-5 text-center">
                      <CardTitle className="text-black text-base">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-black text-sm mt-1">
                        {member.designation}
                      </CardDescription>
                    </div>
                    <hr className="w-full border-gray-300 my-3" />
                    <p className="text-black text-sm italic text-center">
                      {member.description}
                    </p>
                  </div>
                  <div className="flex justify-center mt-6">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-black text-black hover:bg-slate-900 hover:text-white transition-colors text-sm font-medium rounded"
                    >
                      View LinkedIn
                    </a>
                  </div>
                </Card>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
