import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
import TopBar from '../components/TopBar';

export default function Category() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <div>
        <img src='/assets/images/banner-1.jpg'
          style={{ width: "100%", height: "250px", display: "block" }}
        />
      </div>

      <Container className="my-4">

        {/* Search Bar */}
        {/* <div className="d-flex justify-content-center mb-5">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search product..."
          />
        </div> */}

        <div className="d-flex justify-content-center mb-5">
          <div className="input-group w-50">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i> {/* Bootstrap icon */}
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search product..."
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        {/* Product Cards as Flex Wrap */}
        <div className="d-flex flex-wrap justify-content-start gap-3">
          {products.map((_, index) => (
            <div key={index} style={{ flex: "1 1 21%", minWidth: "250px" }}>
              <ProductCard
                image={'/assets/images/banner-img-1.png'}
                name="My Product"
                price={2500}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
