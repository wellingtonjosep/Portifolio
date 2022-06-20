import { motion } from "framer-motion";

const Li = ({ children, onClick, className, ...rest }) => (
  <motion.li
    className={className}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    {...rest}
  >
    {children}
  </motion.li>
);

export default Li;