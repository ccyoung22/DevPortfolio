import { motion } from "framer-motion";

export default function Caitlin() {
  return (
    <>
      <motion.div
        whileHover={{
          textShadow: "0px 0px 8px rgba(255, 0, 0, 0.8)", // Red glow effect
          boxShadow: "0px 0px 8px rgba(255, 0, 0, 0.8)", // Border shadow
        }}
        transition={{ duration: 0.2 }}
        className="p-1"
      >
        Caitlin
      </motion.div>
    </>
  );
}
