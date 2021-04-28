import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import img1 from "../images/boy.png";

const Hero = () => {
  return (
    <div className="hero-bg marg-top ">
      <Row className="px-3 hero">
        <Col className="px-0 hero-text">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.5 }}
            transition={{ delay: 1.2, duration: 2 }}
          >
            Lorem, ipsum dolor.
          </motion.h1>
        </Col>
        <Col className="px-0 hero-img-cont">
          <motion.img
            initial={{ x: "20vw", opacity: 0, height: "50vh" }}
            animate={{ x: 0, opacity: 1, height: "70vh" }}
            transition={{ delay: 1, duration: 1.3 }}
            src={img1}
            className="hero-img"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
