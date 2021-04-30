import React from "react";
import { Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import SearchBox from "./SearchBox";
import img1 from "../images/boy.png";

const Hero = () => {
  return (
    <div className="hero-bg marg-top ">
      <Row className="px-3 hero">
        <motion.div className="col px-0 hero-text">
          <motion.div
            className="px-2 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.1 }}
          >
            <h1>BABY FRIENDLY SWAG</h1>
            <h4>Every Parent needs</h4>
            <div>
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </div>
          </motion.div>
        </motion.div>
        <Col className="px-0 hero-img-cont">
          <motion.img
            initial={{ x: "20vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.3 }}
            src={img1}
            className="hero-img"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
