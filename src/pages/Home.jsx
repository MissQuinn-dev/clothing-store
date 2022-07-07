import React from "react";
import Loading from "../components/Loading";
import ProductCategory from "../components/products/ProductCategory";
import Carousel from "react-material-ui-carousel";
import { useGlobalContext } from "../context";

const Home = () => {
  const { products, loading, categoryArray } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (products.length < 1) {
    return <h2>you need to have a category to show it</h2>;
  }

  return (
    <React.Fragment>
      <Carousel>
        {categoryArray.map((categoryArray, id) => {
          return <ProductCategory key={id} {...categoryArray} />;
        })}
      </Carousel>
    </React.Fragment>
  );
};

export default Home;
