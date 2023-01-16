import React, { useEffect, useState } from "react";

const CouponCard = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://requestly.dev/api/mockv2/getCoupon?username=user1673281842743`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.result));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((e) => e.couponCategoryId === selectedCategory)
    : products;

  return (
    <>
      <div className="container">
        <div className="imgContainer">
          {filteredProducts &&
            filteredProducts.map((e, index) => {
              return (
                <div className="imgCard text-center" key={index}>
                  <div className="img">
                    <img src={e.couponBrandLogo} alt={e.couponBrandName} />
                  </div>
                  <div className="textCard pt-2">
                    <h4>{e.couponBrandName}</h4>
                    <p>
                      {e.couponBenefitType}{" "}
                      <span className="fw-bold">{e.couponBenefitValue}</span>
                    </p>
                  </div>
                  <div className="buttonCard pb-2">
                    <button
                      type="button"
                      className="btn btn-success fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Redeem !
                    </button>

                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog text-light">
                        <div className="modal-content bg-dark">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              {e.couponBrandName}
                            </h1>
                            <button
                              type="button"
                              className="btn-close bg-light"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body img">
                            <img src={e.couponBrandLogo} alt="" />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-success">
                              Understood
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CouponCard;
