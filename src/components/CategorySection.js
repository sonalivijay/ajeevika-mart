import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTshirt, FaLeaf, FaPaintBrush, FaUtensils } from "react-icons/fa"; // example icons

const categories = [
  { name: "Handicrafts", icon: <FaPaintBrush size={30} />, link: "/categories/handicrafts" },
  { name: "Textiles", icon: <FaTshirt size={30} />, link: "/categories/textiles" },
  { name: "Agriculture", icon: <FaLeaf size={30} />, link: "/categories/agriculture" },
  { name: "Food Products", icon: <FaUtensils size={30} />, link: "/categories/food" },
];

function CategorySection() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h3 className="text-center fw-bold mb-4">Shop by Categories</h3>
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
