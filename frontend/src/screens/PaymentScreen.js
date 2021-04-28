import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <div className="marg-top py-5">
      <FormContainer className="marg-top">
        <CheckoutSteps step1 step2 step3 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Paypal or Credit Card"
                id="Paypal"
                name=" paymentMethod"
                value="Paypal"
                checked
                onChange={(e) => setPaymentMethod(e.targe.value)}
              ></Form.Check>

              <Form.Check
                type="radio"
                label="Stripe"
                id="Stripe"
                name=" paymentMethod"
                value="Stripe"
                onChange={(e) => setPaymentMethod(e.targe.value)}
              ></Form.Check>
            </Col>
          </Form.Group>

          <Button type="submit" className='btn-blue' >
            Continue
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default PaymentScreen;
