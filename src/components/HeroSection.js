import React from "react";
import { Carousel, Container } from "react-bootstrap";

function HeroSection() {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            height: "500px",
            backgroundImage: "url('/assets/images/banner-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light">
            <h1 className="mb-3">EMPOWERING ARTISANS. EMPOWERING MADHYA PRADESH</h1>
            <p className="lead mb-3">Support local craftsmanship and sustainable livelihoods with every purchase.</p>
            <Container className="d-flex justify-content-center">
              <input
                type="text"
                className="form-control w-50 me-2"
                placeholder="Search services..."
              />
              <button className="btn bg-violet">Search</button>
            </Container>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div
          className="d-block w-100"
          style={{
            height: "500px",
            backgroundImage: "url('/assets/images/banner-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light">
            <h1 className="mb-3">Digital Governance</h1>
            <p className="lead mb-3">Connecting people, technology & transparency</p>
            <Container className="d-flex justify-content-center">
              <input
                type="text"
                className="form-control w-50 me-2"
                placeholder="Search services..."
              />
              <button className="btn bg-violet">Search</button>
            </Container>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
