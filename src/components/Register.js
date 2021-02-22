import React, { useState } from "react";
import { motion } from "framer-motion";

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

const Register = () => {
  const [form, setFrom] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setError("");
    setFrom((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value.trim() };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = form;
    if (!username || !email || !password) {
      setError("Fill all the Fields");
      return;
    }
    // fetech or axios request to the server in an Effect.
    alert([email, username, password]);
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
        <h1 className="color mb-4 text-center">Get Free Account!</h1>
      </div>
      <div className="color-red">{error}</div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          autoComplete="email"
          className="m-2"
          value={form.email}
          onChange={handleInput}
          autoFocus
        />
      </div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="m-2"
          autoComplete="username"
          value={form.username}
          onChange={handleInput}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="m-2"
          autoComplete="new-password"
          value={form.password}
          onChange={handleInput}
        />
      </div>
      <div className="d-flex justify-content-end my-4">
        <button>Register for free</button>
      </div>
    </motion.form>
  );
};

export default Register;
