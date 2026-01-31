import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-5 md:px-20 py-6">

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left: copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Fuzail Ahmad. All rights reserved.
        </p>

        {/* Right: social icons */}
        <div className="flex gap-5 text-xl text-gray-400 ">
          <a href="https://github.com/iamfuzail" target="_blank" className="hover:text-orange-500 transition ">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/fuzail-ahmad-88b232221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="hover:text-orange-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_iamfuzail?igsh=cG56dWV2c2I1N3Mz&utm_source=qr" target="_blank" className="hover:text-orange-500 transition">
            <FaInstagram />
          </a>
          <a href="mailto:fuzaillive@gmail.com.com" className="hover:text-orange-500 transition">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}
