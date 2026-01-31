// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Hero() {
//   const { scrollYProgress } = useScroll();

//   const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
//   const orbFast = useTransform(scrollYProgress, [0, 1], [0, -200]);
//   const orbSlow = useTransform(scrollYProgress, [0, 1], [0, -80]);
//   const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

//   const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

//   return (
//     <section className="min-h-screen flex items-center px-5 sm:px-8 md:px-20 py-16 md:py-20 relative overflow-hidden bg-white dark:bg-[#0b0b0b] transition-colors duration-500
// ">

//       {/* Parallax ambient orbs */}
//       <motion.div
//         style={{ y: orbFast }}
//         className="absolute top-20 left-10 w-64 h-64 bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-3xl"
//       />
//       <motion.div
//         style={{ y: orbSlow }}
//         className="absolute bottom-20 right-20 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl"
//       />

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 via-transparent to-white dark:to-black/80" />

//       {/* Content */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full text-center md:text-left">

//         {/* Text */}
//         <motion.div style={{ y: textY }}>
//           <p className="text-gray-400 mb-2">Hi, I am</p>

//           <h1 className="text-4xl md:text-6xl font-bold mb-2">
//             Fuzail Ahmad
//           </h1>

//           <h2 className="text-orange-500 text-2xl md:text-5xl font-semibold mb-6">
//             Full Stack Developer
//           </h2>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <button className="bg-orange-500 text-black px-6 py-3 rounded-lg hover:scale-105 transition">
//               Hire Me
//             </button>
//             <button className="border border-gray-600 px-6 py-3 rounded-lg hover:border-orange-500 transition">
//               Download CV
//             </button>
//           </div>
//         </motion.div>

//         {/* Image */}
//         <motion.div
//           style={{ y: imageY }}
//           className="relative flex justify-center mt-10 md:mt-0"
//         >
//           <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-orange-500/20 rounded-full blur-3xl" />

//           <img
//             src="/hero.png"
//             alt="Fuzail"
//             className="relative z-10 w-64 md:w-80 drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
//           />
//         </motion.div>

//       </div>
//     </section>

//   );
// }


import { motion, useScroll, useTransform } from "framer-motion";
import HeroCard from "./HeroCard";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Story layers
  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.4], [0, -70]);
  const imageY = useTransform(scrollYProgress, [0, 0.6], [0, -180]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);


  const orb1 = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const orb2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center 
             pt-28 md:pt-32 px-6 md:px-20 "
    >


      {/* Floating background energy */}
      <motion.div
        style={{ y: orb1 }}
        className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl"
      />

      <motion.div
        style={{ y: orb2 }}
        className="hidden md:block absolute bottom-20 right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
      />

      {/* Content grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Text story */}
        <motion.div style={{ y: titleY, opacity: fadeOut }}>
          <p className="text-gray-400 mb-2">Hi, I’m</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Fuzail Ahmad
          </h1>

          <motion.h2
            style={{ y: subtitleY }}
            className="text-orange-500 text-2xl md:text-4xl font-semibold mb-6"
          >
            Building Products with Code + AI
          </motion.h2>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button
              onClick={() =>
                document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-orange-500 text-black px-7 py-3 rounded-lg font-semibold shadow-lg"
            >
              View My Work
            </button>

          </motion.div>
        </motion.div>

        {/* Hero visual story */}
        <motion.div style={{ y: imageY }} className="relative flex justify-center">
          <HeroCard />
        </motion.div>
      </div>
    </section>
  );
}
