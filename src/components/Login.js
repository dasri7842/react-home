import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
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

const Login = () => {
  return (
    <motion.div
      className="m-5"
      variants={Variants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <h1 className="color mb-4 text-center">Welcome Back!</h1>
      </div>
      <div>
        <input type="text" placeholder="username" className="m-2" />
      </div>
      <div>
        <input type="password" placeholder="password" className="m-2" />
      </div>
      <div className="d-flex justify-content-between align-items-end my-5">
        <NavLink tag={Link} to={{ pathname: "/", state: "Forgot Password" }}>
          forgot password?
        </NavLink>
        <button>LOGIN</button>
      </div>
    </motion.div>
  );
};

export default Login;
