import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Help from "./Help";
import Faq from "./Faq";
import PageNotFound from "./PageNotFound";
import Users from "../redux/Users";
const Products = React.lazy(() => import("./Products"));

const Router = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="categories">Categories</Link>
      <Link to="products">Products</Link>
      <Link to="users">Users</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />}>
          <Route path="help" element={<Help />} />
          <Route path="faq" element={<Faq />} />
        </Route>
        <Route
          path="/products"
          element={
            <React.Suspense fallback={<>Loading....</>}>
              <Products />
            </React.Suspense>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
