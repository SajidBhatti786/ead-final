import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TopSellers from "./TopSellers";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data: ", error);
      });
  }, [id]);

  const handleQuantityChange = (value) => {
    // Handle quantity change (if needed)
    if (quantity === 1 && value === -1) {
      return;
    }
    setQuantity(quantity + value);
  };

  const handleAddToCart = () => {
    // Add to cart functionality (if needed)
  };

  return (
    <>
      <div
        className="container mt-5 "
        // style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        {product ? (
          <>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "500%",
                    height: "500px",
                  }}
                />
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-start">
                <h2 style={{ fontFamily: "Inter", marginBottom: "10px" }}>
                  {product.title}
                </h2>
                <p style={{ fontFamily: "Inter", marginBottom: "5px" }}>
                  Price: ${product.price}
                </p>
                <p style={{ fontFamily: "Inter", marginBottom: "5px" }}>
                  Category: {product.category}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "left",
                    marginBottom: "10px",
                  }}
                >
                  <p style={{ fontFamily: "Inter", marginRight: "10px" }}>
                    Quantity:
                    <br />
                  </p>
                  <button onClick={() => handleQuantityChange(-1)}>-</button>
                  <input
                    type="number"
                    value={quantity}
                    style={{
                      margin: "0 5px",
                      border: "none",
                      outline: "none",
                      width: "auto",
                    }}
                  />
                  <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
                <button
                  onClick={handleAddToCart}
                  style={{ fontFamily: "Inter", marginRight: "10px" }}
                >
                  Add to Cart
                </button>
                <p style={{ fontFamily: "Inter", marginTop: "10px" }}>
                  Subtotal: ${(product.price * quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <h3 style={{ fontFamily: "Source Sans Pro" }}>Description</h3>
              {product && (
                <p style={{ fontFamily: "Source Sans Pro" }}>
                  {product.description}
                </p>
              )}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <TopSellers />
    </>
  );
};

export default ProductDetails;
