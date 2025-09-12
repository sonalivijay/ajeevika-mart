import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTshirt, FaLeaf, FaPaintBrush, FaUtensils } from "react-icons/fa"; // example icons

const categories = [
  { name: "Handicrafts", icon: <FaPaintBrush size={30} />, link: "/category" },
  { name: "Textiles", icon: <FaTshirt size={30} />, link: "/category" },
  { name: "Agriculture", icon: <FaLeaf size={30} />, link: "/category" },
  { name: "Food Products", icon: <FaUtensils size={30} />, link: "/category" },
  { name: "Handicrafts", icon: <FaPaintBrush size={30} />, link: "/category" },
  { name: "Textiles", icon: <FaTshirt size={30} />, link: "/category" },
  { name: "Agriculture", icon: <FaLeaf size={30} />, link: "/category" },
  { name: "Food Products", icon: <FaUtensils size={30} />, link: "/category" },
];

function CategorySection() {
  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Heading + View All */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold m-0">Shop by Categories</h3>
          <Link to="/categories" className="text-violet fw-semibold text-decoration-none">
            View All →
          </Link>
        </div>

        {/* Category Grid */}
        <Row className="g-4 justify-content-center">
          {categories.map((cat, idx) => (
            <Col key={idx} xs={6} md={3}>
              <Link to={cat.link} className="text-decoration-none">
                <Card className="text-center shadow-sm h-100 border-0 category-card">
                  <Card.Body>
                    <div className="text-violet mb-3">{cat.icon}</div>
                    <Card.Title className="fw-semibold text-dark">
                      {cat.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CategorySection;
