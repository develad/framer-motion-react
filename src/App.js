import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="card"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      layout
      style={{ borderRadius: "20px", boxShadow: "0 -5px 20px rgba(0,0,0,0.5)" }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <motion.h1 layout="position">Framer Card 🚀</motion.h1>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            repellat dolore aspernatur qui ipsa modi placeat eligendi voluptate
            magnam perspiciatis?
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, numquam?
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;
