import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const truncateTitle = (title) => {
  const words = title.split(" ");
  const truncatedTitle = words.slice(0, 3).join(" ");
  return truncatedTitle;
};

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 style={{ fontFamily: "Arimo", color: "#1D1D1D" }}>
        Discover New Arrival
      </h2>
      <h3 style={{ fontFamily: "Lato", color: "#555555" }}>
        Recently Added Shirts
      </h3>
      <div className="row justify-content-center mt-4">
        {products.map((product) => (
          <div
            className="col-md-3 mb-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              boxShadow: "none",
            }}
            key={product.id}
          >
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
              className="card-link"
            >
              <div className="card" style={{ width: "200px", height: "300px" }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5
                    style={{
                      fontFamily: "Baloo",
                      color: "#1D1D1D",
                      fontSize: "18px",
                    }}
                  >
                    {truncateTitle(product.title)}
                  </h5>
                  <p
                    style={{
                      fontFamily: "Lato",
                      color: "#024E82",
                      fontSize: "16px",
                    }}
                  >
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
