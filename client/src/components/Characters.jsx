// CharactersSection.jsx
import React from "react";
import { motion } from "framer-motion";

const characters = [
  {
    name: "Luna",
    image: "/images/luna.png"
  },
  {
    name: "Max",
    image: "/images/max.png"
  },
  {
    name: "Zoe",
    image: "/images/zoe.png"
  }
];

export default function Characters() {
  return (
    <div id="characters" className="mt-20 px-16 pb-20">
      <h2 className="text-6xl font-bold text-purple-300 mb-6">Characters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character, index) => (
          <motion.div
            key={character.name}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
            className="rounded-xl border-2 border-purple-500 bg-black p-4 text-center shadow-lg"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-purple-300">{character.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
