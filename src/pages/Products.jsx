import React, { useEffect, useState } from "react";
import ProductItem from "../components/products/ProductItem";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(products);
  return (
    <div>
      <Typography variant="h3" component="div" gutterBottom>
        Products
      </Typography>
      <Divider variant="middle" style={{ marginBottom: 48 }} />
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-between"
      >
        {products.map((product, index) => {
          return <ProductItem key={index} {...product} />;
        })}
      </Grid>
    </div>
  );
};

export default Products;
