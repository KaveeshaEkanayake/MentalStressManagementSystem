import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, name, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex flex-col items-center'
  >
    {/* Name centered on top */}
    <h3 className="text-white font-bold text-xl mb-6 text-center">{name}</h3>

    {/* Character image centered */}
    <img
      src={image}
      alt={name}
      className="w-40 h-40 object-cover rounded-full mx-auto"
    />
  </motion.div>
);


const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}></p>
          <h2 className={styles.sectionHeadText}>Characters</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((character, index) => (
          <FeedbackCard key={character.name} index={index} {...character} />
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(Feedbacks, "characters");
