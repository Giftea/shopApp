import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import HomeHeader from "./HomeHeader";
import img from "../images/shoes.png";
import img1 from "../images/boy.png";
import img2 from "../images/img-2.jpg";

export const CarouselComponent = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error} </Message>
  ) : (
    <Carousel pause="hover" className="carousel-bg">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name} ({product.price}){" "}
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export const TopCarousel = () => {
  return (
    <Carousel pause="hover" className="carousel-bg">
  
      <Carousel.Item >
        <Link >
          <Image src={img} alt='' fluid />
          <Carousel.Caption className="carousel-caption">
            <h2>
              hi
            </h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item >
        <Link >
          <Image src={img1} alt='' fluid />
          <Carousel.Caption className="carousel-caption">
            <h2>
              hi
            </h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

  </Carousel>

  );
};

{/* <Carousel>
<Carousel.Item>
<div class="overlay"></div>
  <img
    className="d-block w-100"
    src={img}
    alt="First slide"
    height="500"
  />
  <Carousel.Caption className='custom-carousel-caption' >
    <h3>Invite Family & Friends to shop for you</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<div class="overlay"></div>
  <img
    className="d-block w-100"
    src={img1}
    alt="Second slide"
    height="500"
  />

  <Carousel.Caption className='custom-carousel-caption'>
    <h3>Clothings for Babies</h3>
    <p>Have your products delivered to you at anytime!</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<div class="overlay"></div>
  <img
    className="d-block w-100"
    src={img2}
    alt="Third slide"
    height="500"
  />

  <Carousel.Caption className='custom-carousel-caption'>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel> */}