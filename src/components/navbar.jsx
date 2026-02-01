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
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}intro.mp3`);
    audioRef.current.volume = 0.4;

    clickRef.current = new Audio(`${import.meta.env.BASE_URL}click.mp3`);
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


