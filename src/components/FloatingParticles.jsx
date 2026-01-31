import { motion } from "framer-motion";

const particles = Array.from({ length: 24 });

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, i) => (
        <motion.span
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2 + Math.random() * 0.4,
            scale: 0.4 + Math.random()
          }}
          animate={{
            y: ["0%", "-120%"],
          }}
          transition={{
            duration: 18 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-2 h-2 rounded-full bg-orange-400/40 blur-[1px]"
        />
      ))}

    </div>
  );
}
