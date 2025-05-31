import { motion } from "framer-motion";

import { styles } from "../styles";


const Hero = () => {
  return (
  
    <section className={`relative w-full h-screen mx-auto`}>
      
      <div
      className={`absolute inset-0 top-1/2 transform -translate-y-1/2 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
>
  <div>
    <h1 className={`${styles.heroHeadText} text-white`}>
      CheerUp
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      CheerUp is your safe space for stress relief and emotional support <br className='sm:block hidden' />
      powered by AI friends, mood tracking, and a caring community.
    </p>
    <button
    className="mt-6 px-6 py-3 rounded-full border-2 border-[#915eff] bg-transparent text-white font-semibold transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#6e40c9] hover:to-[#915eff] shadow-lg"
  >Get started</button>
  </div>
</div>

    </section>
  );
};

export default Hero;
