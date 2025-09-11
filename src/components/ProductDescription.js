import { useEffect, useState } from 'react'

export default function ProductDescription() {
  const [productInfo, setProductInfo] = useState(null)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProductInfo({
        price: 20,
        description: "Elegant handcrafted wooden product perfect for home decor.",
        details: {
          "Height (Upper)": "17 inch",
          "Height (Lower)": "14 inch",
          "Breadth": "15 inch",
          "Material": "Sun mica",
          "Lock Type": "Hand lock",
          "Length": "25 inch"
        }
      })
    }, 1000)
  }, [])

  if (!productInfo) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <div>
        <div className="card-header bg-white text-primary">
          <h3 className="mb-0" style={{ color: '#6f42c1' }}>
            Product Details
          </h3>
        </div>

        <div className="card-body">
          <h4 className="mb-3" style={{ color: '#6f42c1' }}>
            Price: ₹{productInfo.price}
          </h4>
          <p className="lead text-dark">{productInfo.description}</p>

          <hr style={{ borderColor: '#6f42c1' }} />

          <h5 style={{ color: '#6f42c1' }}>Specifications</h5>
          <ul className="list-group mb-4">
            {productInfo.details &&
              Object.entries(productInfo.details).map(([key, value]) => (
                <li
                  key={key}
                  className="d-flex justify-content-between align-items-center"
                 
                >
                  <span className="fw-semibold text-dark">{key}</span>
                  <span className="text-secondary">{value}</span>
                </li>
              ))}
          </ul>

          <div className="d-flex gap-2">
            <button className="btn" style={{ backgroundColor: '#6f42c1', color: '#ffffff' }}>
              Add to Cart
            </button>
            <button className="btn btn-outline-primary" style={{ borderColor: '#6f42c1', color: '#6f42c1' }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
