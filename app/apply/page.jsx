"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Apply() {
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(e.target);

    // Validate ASU email
    const email = formData.get("email");
    if (!email.endsWith("@asu.edu")) {
      setError("Email must be an ASU email (e.g., name@asu.edu).");
      setIsSending(false);
      return;
    }

    // Validate resume file
    const resumeFile = formData.get("resume");
    if (resumeFile && resumeFile.size > 0) {
      if (resumeFile.type !== "application/pdf") {
        setError("Resume must be a PDF file.");
        setIsSending(false);
        return;
      }
    } else {
      setError("Please attach your resume.");
      setIsSending(false);
      return;
    }

    // Convert FormData to a plain object
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Convert resume file to Base64
    const reader = new FileReader();
    reader.readAsDataURL(resumeFile);
    reader.onloadend = async () => {
      data.resume = reader.result;
      await submitApplication(data, e);
    };
  };

  const submitApplication = async (data, formEvent) => {
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        formEvent.target.reset();
        setSuccess(true);
        setTimeout(() => {
          setIsSending(false);
          setSuccess(false);
        }, 10000);
      } else {
        const result = await res.json();
        setError(result.message || "Failed to send application");
        setIsSending(false);
      }
    } catch (error) {
      console.error("Error sending application", error);
      setError("Something went wrong. Please try again.");
      setIsSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-20 bg-[url('/space-bg.jpg')] bg-cover bg-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-6 py-12">
          <h2 className="text-5xl font-bold text-center text-white mb-4">
            Apply to Join Devils Ad Astra
          </h2>
          <p className="text-lg text-center text-white mb-6">
            Fill out the form below, attach your resume, and tell us why you
            want to join.
          </p>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                ASU Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. name@asu.edu"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="major"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Major
              </label>
              <Input
                id="major"
                name="major"
                type="text"
                placeholder="e.g. computer science"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Your Skills
              </label>
              <Input
                id="skills"
                name="skills"
                type="text"
                placeholder="e.g. teamwork, leadership, communication"
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Why do you want to join?
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us why you're interested in joining"
                className="mt-1"
                rows="4"
                required
              />
            </div>
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Resume
              </label>
              <Input
                id="resume"
                name="resume"
                type="file"
                accept="application/pdf"
                className="mt-1"
                required
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSending}
                className={`w-full transition-colors duration-300 ${
                  success
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-white text-black"
                }`}
              >
                {success
                  ? "Application Sent!"
                  : isSending
                  ? "Sending..."
                  : "Submit Application"}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
