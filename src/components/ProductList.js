import { useParams } from "react-router-dom"

const products = [
  { id: 1, name: "Handcrafted Vase", category: "handicrafts", price: 1200 },
  { id: 2, name: "Organic Cotton Shirt", category: "textiles", price: 800 },
  { id: 3, name: "Natural Fertilizer", category: "agriculture", price: 500 },
  { id: 4, name: "Spicy Pickle Jar", category: "food", price: 350 },
  { id: 5, name: "Handmade Rug", category: "textiles", price: 1500 },
  { id: 6, name: "Clay Pot", category: "handicrafts", price: 900 },
  { id: 7, name: "Vegetable Seeds Kit", category: "agriculture", price: 700 },
  { id: 8, name: "Organic Honey Jar", category: "food", price: 650 },
]

export default function ProductList() {
  const { categoryName } = useParams()
  

  const filteredProducts = products.filter(
    (prod) => prod.category === categoryName
  )

  return (
    <div className="container my-5">
      <h2
        className="mb-4"
        style={{ color: "#6f42c1", textTransform: "capitalize" }}
      >
        Products in Category: {categoryName}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="row">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div
                  className="card-body d-flex flex-column justify-content-between"
                  style={{ borderTop: "3px solid #6f42c1" }}
                >
                  <h5 className="card-title text-dark">{prod.name}</h5>
                  <p className="card-text fw-semibold">₹{prod.price}</p>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#6f42c1",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
