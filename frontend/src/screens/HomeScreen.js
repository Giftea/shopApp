import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { CarouselComponent, TopCarousel } from "../components/Carousel";
import Paginate from "../components/Paginate";
import Hero from "../components/Hero";

const HomeScreen = ({ match }) => {
  const keyWord = match.params.keyWord;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyWord, pageNumber));
   
  }, [dispatch, keyWord, pageNumber]);
  return (
    <>
      {!keyWord && <Hero />}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message  className="py-5 marg-top" variant="danger">{error}</Message>
      ) : (
        <>
          <Container className="py-5 marg-top">
            <Row>
              {products.map((product) => {
                return (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                );
              })}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyWord={keyWord ? keyWord : ""}
            />
            {/* <Loader /> */}
          </Container>
        </>
      )}
      {/* {!keyWord && <TopCarousel />} */}
    </>
  );
};

export default HomeScreen;
