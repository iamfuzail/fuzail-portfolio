import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const clusters = [
  { title: "API Powered Apps", count: "6 Projects", image: "/projects/api.jpg", link: "/portfolio/api" },
  { title: "Frontend Mini Apps", count: "6 Projects", image: "/projects/frontend.jpg", link: "/portfolio/frontend" },
  { title: "UI Components", count: "3 Projects", image: "/projects/ui.png", link: "/portfolio/ui" },
  { title: "Backend & Databases", count: "3 Projects", image: "/projects/backend.jpg", link: "/portfolio/backend" },
  { title: "Full Stack Products", count: "2 Projects", image: "/projects/fullstack.jpg", link: "/portfolio/fullstack" },
];

export default function Portfolio() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const hintRef = useRef(null);

  const x = useMotionValue(0);
  const inView = useInView(hintRef, { once: true });

  const [dragWidth, setDragWidth] = useState(0);

  const CARD_WIDTH = 320 + 40; // width + gap

  const calculateWidth = () => {
    if (!viewportRef.current || !trackRef.current) return;
    setDragWidth(trackRef.current.scrollWidth - viewportRef.current.offsetWidth);
  };

  // calculate slider width
  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  // ---- SNAP MAGNET ----
  const snapToCard = () => {
    const currentX = x.get();
    const snapped = Math.round(currentX / CARD_WIDTH) * CARD_WIDTH;

    animate(x, snapped, {
      type: "spring",
      stiffness: 280,
      damping: 30,
    });
  };

  // swipe hint animation
  const runHint = () => {
    animate(x, -140, { type: "spring", stiffness: 90, damping: 18 });
    setTimeout(() => {
      animate(x, 0, { type: "spring", stiffness: 110, damping: 20 });
    }, 600);
  };

  // trigger when scrolled into view
  useEffect(() => {
    if (inView) runHint();
  }, [inView]);

  // trigger when navbar hash clicked
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#portfolio") {
        setTimeout(runHint, 400);
      }
    };

    window.addEventListener("hashchange", handleHash);
    handleHash();
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section ref={hintRef} id="portfolio" className="py-20 overflow-x-hidden ">

      <div className="px-5 sm:px-8 md:px-20 mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-orange-500">Portfolio</span>
        </h2>
      </div>

      <div className="relative px-5 sm:px-8 md:px-20">

        {/* LEFT ARROW */}
        <button
          onClick={() => x.set(x.get() + 340)}
          className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-30
                     bg-white text-black w-12 h-12 rounded-full shadow-xl
                     items-center justify-center text-2xl hover:scale-110 transition"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => x.set(x.get() - 340)}
          className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-30
                     bg-white text-black w-12 h-12 rounded-full shadow-xl
                     items-center justify-center text-2xl hover:scale-110 transition"
        >
          ›
        </button>

        {/* VIEWPORT */}
        <div ref={viewportRef} className="overflow-hidden">

          {/* SLIDER TRACK */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            onDragEnd={snapToCard}
            dragConstraints={{ right: 0, left: -dragWidth }}
            dragElastic={0.12}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
            className="flex gap-10 py-8 cursor-grab active:cursor-grabbing"
          >
            {clusters.map((c, i) => (
              <motion.a
                key={i}
                href={c.link}
                whileHover={{ scale: 1.05 }}
                className="group relative w-[320px] shrink-0 overflow-visible rounded-2xl
                           border border-gray-800 hover:border-orange-500/60 transition
                           hover:shadow-[0_0_50px_rgba(249,115,22,0.35)]"
              >

                {/* Lazy blur image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse pointer-events-none" />

                  <img
                    src={c.image}
                    loading="lazy"
                    onLoad={(e) => {
                      e.currentTarget.classList.remove("blur-md", "opacity-80");
                      e.currentTarget.previousSibling.remove();
                      calculateWidth();
                    }}
                    width="400"
                    height="300"
                    className="h-64 w-full object-cover blur-md opacity-80 transition-all duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Decorative layers */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Text */}
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-2xl font-semibold text-white">{c.title}</h3>
                  <p className="text-orange-400 text-sm">{c.count}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-2xl bg-black/70 opacity-0
                                group-hover:opacity-100 transition duration-500
                                flex items-center justify-center pointer-events-none">
                  <div className="text-center translate-y-6 group-hover:translate-y-0 transition duration-500">
                    <p className="text-white text-2xl font-semibold mb-2">
                      Explore Collection
                    </p>
                    <span className="text-orange-400">View Projects →</span>
                  </div>
                </div>

              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
