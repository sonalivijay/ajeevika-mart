import React from "react";
import { Carousel, Container, Badge } from "react-bootstrap";

function HeroSection() {
  const suggestions = [
    "Handicrafts",
    "Textiles",
    "Agriculture",
    "Food Products",
    "Local Artisans",
  ];

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
            <h1 className="mb-3 text-center">EMPOWERING ARTISANS. EMPOWERING MADHYA PRADESH</h1>
            <p className="lead mb-3 text-center">Support local craftsmanship and sustainable livelihoods with every purchase.</p>
            
            {/* Search Bar */}
            <Container className="d-flex justify-content-center mb-2">
              <input
                type="text"
                className="form-control w-50 me-2"
                placeholder="Search services..."
              />
              <button className="btn bg-violet">Search</button>
            </Container>

            {/* Suggestion Tags */}
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {suggestions.map((tag, idx) => (
                <Badge
                  key={idx}
                  pill
                  bg="light"
                  text="dark"
                  className="px-3 py-2 shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => alert(`Search for "${tag}"`)} // Example click action
                >
                  {tag}
                </Badge>
              ))}
            </div>
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
            <h1 className="mb-3 text-center">Digital Governance</h1>
            <p className="lead mb-3 text-center">Connecting people, technology & transparency</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
