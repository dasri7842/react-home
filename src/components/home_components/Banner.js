import banner1 from "./../../assests/banner1.svg";
import { ArrowRightCircle } from "react-feather";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Login from "./../Login";
import Register from "./../Register";

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

const Banner = () => {
  const [state, setState] = useState(0);
  return (
    <div className="banner">
      <div className="px-lg-4 mx-lg-5 d-lg-flex justify-content-center align-items-center">
        <motion.div
          className="mx-3 col-lg-8"
          variants={Variants}
          initial="hidden"
          animate="visible"
        >
          <h3>Your Learning Journey Matters to Us</h3>
          <hr className="mr-5" />
          <p className="display-3">
            Future achievers study from IITians Online
          </p>
          <div className="fs-4 mt-5 d-flex justify-content-end col-8">
            <NavLink
              onClick={() => setState(2)}
              tag={Link}
              to={{ pathname: "/", state: "hello" }}
            >
              Get started <ArrowRightCircle color={"#29d8db"} size={25} />
            </NavLink>
            <NavLink
              tag={Link}
              to={{ pathname: "/", state: "hello" }}
              onClick={() => setState(1)}
            >
              Login <ArrowRightCircle color={"#29d8db"} size={25} />
            </NavLink>
          </div>
        </motion.div>
        <motion.div
          className="my-5 col-lg-4"
          variants={Variants}
          initial="hidden"
          animate="visible"
        >
          {state === 0 ? (
            <img src={banner1} className="img-fluid" alt="banner"></img>
          ) : state === 1 ? (
            <Login />
          ) : (
            <Register />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
