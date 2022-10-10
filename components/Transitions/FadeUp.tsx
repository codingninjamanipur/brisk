import React, { Children, ReactNode } from "react";
import { motion } from "framer-motion";

interface PROPS {
  children: ReactNode,
  delay:number,
  className: string
}
const FadeUp:React.FC<PROPS> = ({ children, delay, className }) => {
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
