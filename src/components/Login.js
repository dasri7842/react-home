import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";

const Variants = {
  hidden: {
    x: "-15vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
      type: "spring",
    },
  },
};

const Login = () => {
  const [form, setFrom] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setError("");
    setFrom((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value.trim() };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    if (!username || !password) {
      setError("Fill all the Fields");
      return;
    }
    // fetech or axios request to the server in an Effect.
    alert([username, password]);
  };

  return (
    <motion.form
      className="col-sm-8 container m-auto"
      variants={Variants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
    >
      <div>
        <h1 className="color mb-4 text-center">Welcome Back!</h1>
      </div>
      <div className="color-red">{error}</div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="m-2"
          autoComplete="username"
          value={form.username}
          onChange={handleInput}
          autoFocus
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="m-2"
          autoComplete="cur-password"
          value={form.password}
          onChange={handleInput}
        />
      </div>
      <div className="d-flex justify-content-between align-items-end my-5">
        <NavLink tag={Link} to={{ pathname: "/", state: "Forgot Password" }}>
          forgot password?
        </NavLink>
        <button>LOGIN</button>
      </div>
    </motion.form>
  );
};

export default Login;
