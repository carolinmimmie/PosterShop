import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <div className="banner">
      <motion.div
        className="banner-text"
        animate={{ x: ["100%", "-100%"] }} // Börjar till höger, rullar till vänster
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <p>30% off on posters and canvas prints – with purchases over 299 SEK</p>
      </motion.div>
    </div>
  );
};
