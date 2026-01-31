import { motion, useScroll, useTransform } from "framer-motion";

const bubbles = [
  "React", "Node", "Python", "Tailwind",
  "MongoDB", "AI Tools", "APIs", "Git", "Docker"
];

const skills = [
  { name: "Frontend", desc: "React, Tailwind, UI systems", power: 90 },
  { name: "Backend", desc: "Node, APIs, Databases", power: 85 },
  { name: "AI / Automation", desc: "AI tools, workflows", power: 80 },
  { name: "Data & Analytics", desc: "ISRO research", power: 75 },
];

export default function Skills() {
  const { scrollYProgress } = useScroll();

  const drift = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section className="py-24 px-6 md:px-24 overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-14"
      >
        Living <span className="text-orange-500">Skills</span>
      </motion.h2>

      {/* Floating tech bubbles */}
      <motion.div
  style={{ y: drift }}
  className="flex flex-wrap gap-6 mt-22 mb-6"
>
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="px-6 py-3 rounded-full
                       bg-orange-500/10 border border-orange-500/40
                       text-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.45)]"
          >
            {b}
          </motion.div>
        ))}
      </motion.div>

      {/* Skill energy cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-[#111] p-7 rounded-2xl border border-gray-800
                       hover:border-orange-500/70 transition overflow-hidden"
          >

            {/* glow pulse */}
            <motion.div
              style={{ opacity: glow }}
              className="absolute inset-0 bg-orange-500/10 blur-2xl"
            />

            <h3 className="text-xl font-semibold mb-2 relative z-10">
              {s.name}
            </h3>

            <p className="text-gray-400 text-sm mb-5 relative z-10">
              {s.desc}
            </p>

            {/* energy bar */}
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.power}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-orange-500 rounded-full"
              />
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
