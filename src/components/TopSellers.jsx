import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopSellers = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const truncateTitle = (title) => {
    const words = title.split(" ");
    const truncatedTitle = words.slice(0, 3).join(" ");
    return truncatedTitle;
  };
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

  const loadMore = () => {
    setVisibleProducts(visibleProducts + 4);
  };

  return (
    <div className="container mt-5">
      <h1 style={{ fontFamily: "Arimo", textAlign: "center" }}>Top Sellers</h1>
      <p style={{ textAlign: "center" }}>Browse our top selling products</p>
      <div className="row mt-4">
        {products.slice(0, visibleProducts).map((product) => (
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
      {visibleProducts < products.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default TopSellers;
