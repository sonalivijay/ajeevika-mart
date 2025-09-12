import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ image, name, price }) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleViewProduct = () => {
        navigate(`/product`); // Navigate to ProductDetails component add id afterwards
    };
    return (
        <div className="card mb-4 shadow-sm " style={{
            width: "15rem", transition: "transform 0.4s ease, box-shadow 0.4s ease",
            cursor: "pointer"
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"; // subtle lift + scale
                e.currentTarget.style.boxShadow = "0 1rem 2rem rgba(0,0,0,0.25)"; // deeper shadow
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "";
            }}
        >
            <img src={image} className="card-img-top img-fluid" alt={name} style={{
                maxHeight: '100%',
                objectFit: 'contain',
            }} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">{price}</p>
                <button
                    className="btn mb-2"
                    style={{
                        backgroundColor: "#6f42c1",
                        color: "white",
                        width: "100%",
                    }}
                    onClick={handleViewProduct}
                >
                    View Product
                </button>
               
                <button
                    className="btn"
                    style={{
                        border: "1px solid #6f42c1",
                        backgroundColor: isHovered ? "#6f42c1" : "transparent",
                        color: isHovered ? "white" : "#6f42c1",
                        width: "100%",
                        transition: "all 0.3s ease"
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    &#128722; Add to Cart
                </button>
            </div>
        </div>
    );
}
