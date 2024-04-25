import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const url = "https://dummyjson.com/products";
  const [products, setProducts] = useState("");
  const [deletedProducts, setDeletedProducts] = useState("");
  const getProducts = async () => {
    const response = await axios.get(url);
    setProducts(response.data.products);
  };
  //   const getProducts = () => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   };
  useEffect(() => {
    getProducts();
  }, []);

  const alterProduct = (name) => {
    setProducts(products.filter((data) => data.title != name));
    const product = products.filter((data) => data.title === name);
    setDeletedProducts([...deletedProducts, ...product]);
  };
  return (
    <div>
      <div>
        {products &&
          products.map((data, index) => (
            <div>
              <div>{data.title}</div>
              <button
                onClick={() => {
                  alterProduct(data.title);
                }}
              >
                Click
              </button>
            </div>
          ))}
      </div>
      <div>Deleted Products</div>
      <div>
        {deletedProducts &&
          deletedProducts.map((data) => <div>{data.title}</div>)}
      </div>
    </div>
  );
};

export default Products;
