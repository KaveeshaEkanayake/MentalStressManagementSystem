import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Therapy Chat",
    image: "/images/therapy-chat.png"
  },
  {
    name: "Mindful Games",
    image: "/images/mindful-games.png"
  },
  {
    name: "Mood Tracker",
    image: "/images/mood-tracker.png"
  },
  {
    name: "Motivational Quotes",
    image: "/images/motivational-quotes.png"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-extrabold text-purple-300 mb-8">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
            className="rounded-xl border-2 border-purple-500 bg-black p-4 text-center shadow-lg"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-purple-300">{service.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
