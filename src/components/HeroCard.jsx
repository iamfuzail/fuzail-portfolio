import { motion } from "framer-motion";
import { useState, useRef } from "react";
import speakerOn from "../assets/speaker-on.svg";
import speakerOff from "../assets/speaker-off.svg";

export default function HeroCard() {
  const [flipped, setFlipped] = useState(false);
  const [muted, setMuted] = useState(true);

  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}hero-song.mp3`);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }

  const toggleSound = (e) => {
    e.stopPropagation();
    muted ? audioRef.current.play() : audioRef.current.pause();
    setMuted(!muted);
  };

  return (
    <div className="relative w-64 md:w-80 h-96 perspective">

      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="relative w-full h-full preserve-3d cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >

        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}hero.png`}
            className="w-full h-full object-cover rounded-2xl"
            width="400"
            height="300"
            alt="Hero"
          />
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden 
                        rounded-2xl bg-white flex items-center justify-center">

          <h2 className="text-2xl md:text-2xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-br from-black via-gray-600 to-black text-center px-6">
            YES, IT'S AWESOME<br />THANK YOU!
          </h2>

          <button
            onClick={toggleSound}
            className={`absolute bottom-3 right-3 rounded-full p-2 transition
    ${muted
                ? "bg-black/70"
                : "bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.9)]"
              }`}
          >
            <img
              src={muted ? speakerOff : speakerOn}
              className="w-4 h-4"
            />
          </button>

        </div>

      </motion.div>

      {/* tiny hint */}
      <p className="text-sm text-gray-400 mt-3 text-center animate-pulse">
        tap image to flip
      </p>
    </div>
  );
}
