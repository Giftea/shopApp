import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col className="text-center py-3">Created By Giftea</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
