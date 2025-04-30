"use client";
import React from "react";
type THero = {
  title: string;
  hero: string;
};
const HeroSection = ({ title, hero }) => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          {hero}
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-primary hover:bg-primaryHover text-white font-semibold rounded-full transition-transform duration-300 transform hover:scale-105"
        >
          Visit My Works
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
