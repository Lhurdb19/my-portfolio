import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="text-center p-20"
    >
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-gray-600">I'm a Frontend Developer passionate about Web3 & UI/UX.</p>
    </motion.div>
  );
};

export default Hero;
