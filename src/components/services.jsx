// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Frontend Development",
//     desc: "Fast, modern, and responsive web apps with React.",
//   },
//   {
//     title: "UI/UX Design",
//     desc: "Clean interfaces focused on clarity and conversion.",
//   },
//   {
//     title: "Animations",
//     desc: "Smooth motion for premium user experience.",
//   },
//   {
//     title: "Performance Optimization",
//     desc: "Blazing fast load times and SEO-friendly builds.",
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold mb-12"
//       >
//         What I <span className="text-orange-500">Do</span>
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((item, i) => (
//           <motion.div
//            key={i}
//            initial={{ opacity: 0, y: 40 }}
//            whileInView={{ opacity: 1, y: 0 }}
//            transition={{ delay: i * 0.15, duration: 0.6 }}
//            viewport={{ once: true }}
//            whileHover={{ y: -12, scale: 1.03 }}
//            className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50"
//           >

//             <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//             <p className="text-gray-400 text-sm">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

const services = [
  {
    title: "Full Stack Development",
    desc: "Building fast, scalable web products with modern tech stacks.",
    icon: "💻",
  },
  {
    title: "AI Automation",
    desc: "Integrating AI tools to automate workflows and boost productivity.",
    icon: "🤖",
  },
  {
    title: "Data & Analytics",
    desc: "Turning raw data into actionable insights and smart systems.",
    icon: "📊",
  },
  {
    title: "Growth & Marketing Tech",
    desc: "Creating tech-powered funnels that convert users into customers.",
    icon: "🚀",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6 md:px-20 relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-20 text-left"
      >
        What I <span className="text-orange-500">Do</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            whileHover={{ scale: 1.06 }}
            className="relative bg-[#111] p-10 rounded-2xl border border-gray-800
                       hover:border-orange-500/60 transition
                       hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]"
          >
            {/* glowing aura */}
            <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition" />

            <div className="text-5xl mb-6">{s.icon}</div>

            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
