import React from "react";
import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <div>Categories</div>
      <div>
        <Link to="/categories/help">Help</Link>
        <Link to="/categories/faq">Faq</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
