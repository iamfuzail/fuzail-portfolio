import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSend = () => {
    if (!validate()) return;
    setLoading(true);

    emailjs.send(
      "service_40g110t",
      "template_ftszqzi",
      {
        name,
        email,
        message,
      },
      "HcyK5plIo_Dl1fa8v"

    )
      .then(() => {
        setLoading(false);
        setSent(true);
      })
      .catch((error) => {
        setLoading(false);
        console.log("EmailJS error:", error);
        alert(error.text || "Failed to send message");
      });
  };


  return (
    <section
      id="contact"
      className="min-h-screen bg-black px-5 sm:px-8 md:px-20 py-16 md:py-20 flex items-center"
    >
      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl mx-auto bg-[#0f0f0f] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Let’s <span className="text-orange-500">Connect</span>
            </h2>

            <div className="grid gap-6">
              <motion.input
                value={name}
                onChange={(e) => setName(e.target.value)}
                animate={errors.name ? { x: [-8, 8, -6, 6, 0] } : {}}
                className={`bg-black border p-4 rounded-lg outline-none transition text-white 
    ${errors.name ? "border-red-500" : "border-gray-700 focus:border-orange-500"}`}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              <motion.input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                animate={errors.email ? { x: [-8, 8, -6, 6, 0] } : {}}
                className={`bg-black border p-4 rounded-lg outline-none transition text-white 
    ${errors.email ? "border-red-500" : "border-gray-700 focus:border-orange-500"}`}
                placeholder="Your Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <motion.textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                animate={errors.message ? { x: [-8, 8, -6, 6, 0] } : {}}
                className={`bg-black border p-4 rounded-lg outline-none transition resize-none text-white 
    ${errors.message ? "border-red-500" : "border-gray-700 focus:border-orange-500"}`}
                rows="5"
                placeholder="Your Message"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}


              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-orange-500 text-black py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition disabled:opacity-70"
              >
                {loading ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  />
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl mx-auto bg-[#0f0f0f] p-12 rounded-2xl border border-orange-500/30 text-center shadow-xl"
          >
            <div className="text-5xl mb-4">✅</div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Message Sent!
            </h3>

            <p className="text-gray-400 mb-6">
              I’ll get back to you shortly.
            </p>

            <button
              onClick={() => setSent(false)}
              className="text-orange-500 hover:underline transition"
            >
              Send another message
            </button>
          </motion.div>

        )}
      </AnimatePresence>
    </section>
  );
}
