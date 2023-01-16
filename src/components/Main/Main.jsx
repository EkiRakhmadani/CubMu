import React, { useState } from "react";
import CouponCategory from "./Category/CouponCategory";
import CouponCard from "./Coupon/CouponCard";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <div className="body">
        <CouponCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <CouponCard selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default Main;
