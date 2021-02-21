import React from "react";
import { motion } from "framer-motion";
const Variants = {
  hidden: {
    x: "-15vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "spring",
    },
  },
};

const Register = () => {
  return (
    <motion.div
      className="m-5"
      variants={Variants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <h1 className="color mb-4 text-center">Get Free Account!</h1>
      </div>
      <div>
        <input type="email" placeholder="email" className="m-2" />
      </div>
      <div>
        <input type="text" placeholder="username" className="m-2" />
      </div>
      <div>
        <input type="password" placeholder="password" className="m-2" />
      </div>
      <div className="d-flex justify-content-end my-4">
        <button>Register for free</button>
      </div>
    </motion.div>
  );
};

export default Register;
