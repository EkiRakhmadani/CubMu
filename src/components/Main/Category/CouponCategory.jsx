import React, { useEffect, useState } from "react";

const CouponCategory = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      `https://requestly.dev/api/mockv2/getAllCategory?username=user1673281842743`
    )
      .then((res) => res.json())
      .then((data) => setCategories(data.result));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <>
      <div className="container pt-4">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="bg-dark text-light"
        >
          <option value="">All</option>
          {categories.map((e, index) => (
            <option key={index} value={e.categoryId}>
              {e.categoryName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CouponCategory;
