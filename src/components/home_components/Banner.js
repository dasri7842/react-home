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
    y: "15vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1.2,
      type: "spring",
    },
  },
};

const Banner = () => {
  const [state, setState] = useState(0); // 1 -> for login popup, 2 -> register and 0 -> image.
  return (
    <motion.div
      className="banner"
      variants={Variants}
      initial="hidden"
      animate="visible"
    >
      <div className="px-lg-4 mx-lg-5 d-lg-flex justify-content-center align-items-center">
        <div className="mx-3 col-lg-6">
          <h3>Your Learning Journey Matters to Us</h3>
          <hr className="line" />
          <p className="display-3">
            Future achievers study from IITians Online
          </p>
          <div className="fs-4 mt-5 d-flex justify-content-end col-8">
            <NavLink
              onClick={() => setState(2)}
              tag={Link}
              to={{ pathname: "/", state: "Get started" }}
            >
              Get started <ArrowRightCircle color={"#29d8db"} size={25} />
            </NavLink>
            <NavLink
              tag={Link}
              to={{ pathname: "/", state: "Login Page" }}
              onClick={() => setState(1)}
            >
              Login <ArrowRightCircle color={"#29d8db"} size={25} />
            </NavLink>
          </div>
        </div>
        <div className="my-5 col-lg-6">
          {state === 0 ? (
            <div className="d-flex justify-content-center">
              <img src={banner1} className="img-fluid" alt="banner"></img>
            </div>
          ) : state === 1 ? (
            <Login />
          ) : (
            <Register />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
