// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// export default function Navbar({ toggleTheme, dark }) {
//   const [open, setOpen] = useState(false);

//   const links = ["about", "services", "portfolio", "contact"];

//   return (
//     <>
//       {/* Top navbar */}
//       <motion.nav
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="fixed top-0 left-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur-md 
//                    text-black dark:text-white px-5 md:px-20 py-4 flex justify-between items-center z-50"
//       >
//         <h1 className="text-xl font-bold text-orange-500">Simmi</h1>

//         {/* Desktop menu */}
//         <div className="hidden md:flex gap-8 text-sm items-center">
//           {links.map((item) => (
//             <a
//               key={item}
//               href={`#${item}`}
//               className="hover:text-orange-500 transition"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </a>
//           ))}

//           {/* Theme toggle */}
//           <div
//             onClick={toggleTheme}
//             className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition"
//           >
//             <div
//               className={`bg-white w-4 h-4 rounded-full transform transition
//     ${dark 
//       ? "translate-x-6 ring-4 ring-orange-500/40" 
//       : "translate-x-0"}
//   `}

//             />
//           </div>
//         </div>

//         {/* Mobile controls */}
//         <div className="flex items-center gap-3 md:hidden">
//           <div
//             onClick={toggleTheme}
//             className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition"
//           >
//             <div
//               className={`bg-white w-4 h-4 rounded-full transform transition
//     ${dark 
//       ? "translate-x-6 ring-4 ring-orange-500/40" 
//       : "translate-x-0"}
//   `}

//             />
//           </div>


//           <button
//             onClick={() => setOpen(true)}
//             className="text-2xl"
//           >
//             ☰
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile menu overlay + drawer */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Blur background */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//             />

//             {/* Slide drawer */}
//             <motion.div
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               dragElastic={0.15}
//               onDragEnd={(e, info) => {
//                 if (info.offset.x > 100) setOpen(false);
//               }}
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className="fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-black 
//                          text-black dark:text-white z-50 flex flex-col 
//                          items-center justify-center gap-8 text-2xl"
//             >
//               {links.map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item}`}
//                   onClick={() => setOpen(false)}
//                   className="hover:text-orange-500 transition"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               ))}

//               <button
//                 onClick={() => setOpen(false)}
//                 className="absolute top-6 right-6 text-3xl"
//               >
//                 ✕
//               </button>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const logoControls = useAnimationControls();
  const audioRef = useRef(null);
  const clickRef = useRef(null);

  /* ---------- audio setup ---------- */
  useEffect(() => {
    audioRef.current = new Audio("/intro.mp3");
    audioRef.current.volume = 0.4;

    clickRef.current = new Audio("/click.mp3");
    clickRef.current.volume = 0.35;
  }, []);

  /* ---------- glass effect ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- active section sync ---------- */
  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const found = links.find(
              l => l.href === `#${entry.target.id}`
            );
            if (found) setActive(found.name);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(sec => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  /* ---------- force Home highlight ---------- */
  useEffect(() => {
    const checkTop = () => {
      if (window.scrollY < 120) setActive("Home");
    };
    window.addEventListener("scroll", checkTop);
    return () => window.removeEventListener("scroll", checkTop);
  }, []);

  const goTo = (href) => {
  const el = document.querySelector(href);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });

  setOpen(false);
};


  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed w-full z-50 transition-all duration-500
          ${scrolled
            ? "backdrop-blur-xl bg-black/60 shadow-lg py-3"
            : "bg-transparent py-6"}
        `}
      >
        <div className="px-6 md:px-20 flex items-center justify-between">

          {/* Elastic logo + music */}
          <motion.button
            animate={logoControls}
            onClick={async () => {
              window.scrollTo({ top: 0, behavior: "smooth" });

              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(()=>{});
              }

              await logoControls.start({ scaleX: 1.4, scaleY: 0.85, transition:{duration:0.18}});
              await logoControls.start({ scaleX: 0.9, scaleY: 1.05, transition:{duration:0.15}});
              await logoControls.start({ scaleX: 1, scaleY: 1, transition:{type:"spring", stiffness:260, damping:14}});
            }}
            className="font-bold text-xl hover:text-orange-500 transition"
          >
            Fuzail<span className="text-orange-500">.</span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-10 relative">
            {links.map(l => (
              <button
                key={l.name}
                onClick={() => goTo(l.href)}
                className="relative text-gray-300 hover:text-white transition"
              >
                {l.name}
                {active === l.name && (
                  <motion.span
                    layoutId="navGlow"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-orange-500 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.9)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-4">

            {/* Toggle */}
            <button
              onClick={() => {
                clickRef.current?.play().catch(()=>{});
                toggleTheme();
              }}
              className="w-12 h-12 rounded-full border border-gray-700
                         flex items-center justify-center
                         hover:border-orange-500 transition
                         hover:shadow-[0_0_14px_rgba(249,115,22,0.7)]"
            >
              <motion.img
                key={dark ? "moon" : "sun"}
                src={dark ? moonIcon : sunIcon}
                initial={{ rotate:-90, scale:0.6, opacity:0 }}
                animate={{ rotate:0, scale:1, opacity:1 }}
                transition={{ type:"spring", stiffness:260, damping:18 }}
                className="w-8 h-8"
              />
            </button>

            {/* Hamburger */}
            <button onClick={() => setOpen(true)} className="md:hidden text-3xl">
              ☰
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile swipe menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              onClick={()=>setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            />

            <motion.div
              drag="x"
              dragConstraints={{left:0,right:0}}
              dragElastic={0.15}
              onDragEnd={(e,info)=>{
                if(info.offset.x>120||info.velocity.x>500) setOpen(false);
              }}
              initial={{x:"100%"}}
              animate={{x:0}}
              exit={{x:"100%"}}
              transition={{type:"spring", stiffness:120, damping:20}}
              className="fixed right-0 top-0 h-full w-72 bg-[#0b0b0b] z-50 p-8 flex flex-col gap-8"
            >
              {links.map(l=>(
                <button
                  key={l.name}
                  onClick={()=>goTo(l.href)}
                  className="text-xl text-left hover:text-orange-500 transition"
                >
                  {l.name}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


