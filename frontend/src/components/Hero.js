import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import img1 from "../images/boy.png";

const Hero = () => {
  return (
    <div className="hero-bg marg-top ">
      <Row className="px-3 hero">
        <motion.div
          className="col px-0 hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ delay: 1.2, duration: 2 }}
        >
          <h1>Baby Friendly SWAG</h1>
          <h4>Every Parent needs</h4>
        </motion.div>
        <Col className="px-0 hero-img-cont">
          <motion.img
            initial={{ x: "20vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
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
