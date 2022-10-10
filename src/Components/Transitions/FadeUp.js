import React, { Children } from "react";
import { motion } from "framer-motion";
const FadeUp = ({ children, delay, className }) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
