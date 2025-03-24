import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioLanding() {
  const [text, setText] = useState("");
  const words = "Web Developer | UI/UX Designer | Freelancer".split(" | ");
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(words[index]);
      index = (index + 1) % words.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 px-10">
      {/* Left Section */}
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900">
          Hi, I am <span className="text-blue-500">Clyde</span>
        </h1>
        <motion.p 
          className="mt-4 text-xl font-medium text-gray-600"
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ duration: 1 }}
        >
          {text}
        </motion.p>
        <div className="mt-6 flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Hire Me
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="absolute right-10 bottom-0">
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1741338374/samples/people/smiling-man.jpg" alt="Clyde" className="h-[80vh] object-cover" />
      </div>
    </div>
  );
}
