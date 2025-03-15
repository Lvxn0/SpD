import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Socials() {
  return (
    <div className="absolute bottom-8 flex space-x-8 text-white z-10 animate__animated animate__fadeIn animate__delay-1s">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex space-x-8"
      >
        <a
          href="https://www.instagram.com/specialdancetv/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn animate__delay-1s"
        >
          <Instagram className="h-8 w-8" />
        </a>
        <a
          href="https://www.youtube.com/@specialdancetv"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn animate__delay-2s"
        >
          <Youtube className="h-8 w-8" />
        </a>
        <a
          href="https://www.facebook.com/socialdancetvuk/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300 transform hover:scale-110 animate__animated animate__fadeIn animate__delay-3s"
        >
          <Facebook className="h-8 w-8" />
        </a>
      </motion.div>
    </div>
  );
}
