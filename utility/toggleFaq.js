import {  motion } from "framer-motion";

const Toggle = ({ children, title, isOpen, onToggle }) => {
   return (
      <motion.div className="card">
         <motion.div className="question" onClick={onToggle}>
            <h3>{title}</h3>
            {isOpen ? <i className="bi bi-chevron-double-up"></i> : <i className="bi bi-chevron-double-down"></i>}
         </motion.div>
         <motion.div className="answer-wrapper">{isOpen ? children : ""}</motion.div>
      </motion.div>
   );
};

export default Toggle;
