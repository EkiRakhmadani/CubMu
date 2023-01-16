import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faContactBook,
  faBuilding,
} from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid bg-dark ">
        <div className="container text-light text-justify text-md-start pt-4 pb-3">
          <div className="row">
            <div className="col-6">
              <h4 className="text-danger">CubMu</h4>
              <p className="fw-light fs-6">
                CubMu adalah layanan steraming dari Transvision yang menyediakan
                berbagai konten VOD menarik dan menghibur. Nikmati semua konten
                dari CubMu di berbagai platform media Android, iOS, TV dan
                Website.
              </p>

              <p>
                <span className="me-2 fw-light fs-6">Syarat dan Ketentuan</span>
                | {/*  */}
                <span className="me-2 fw-light fs-6">FAQ</span>| {/*  */}
                <span className="me-2 fw-light fs-6">Tentang Kami</span>
              </p>
            </div>

            <div className="col-6">
              <div className="followContainer pt-4">
                <div className="follow">
                  <h1 className="iconContainer text-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </h1>
                  <ul className="followList">
                    <li className="firstList">Email</li>
                    <li>:</li>
                    <li className="lastList">abcds@xyz.com</li>
                  </ul>
                </div>

                <div className="follow">
                  <h1 className="iconContainer text-center">
                    <FontAwesomeIcon icon={faContactBook} />
                  </h1>
                  <ul className="followList">
                    <li className="firstList">Call</li>
                    <li>:</li>
                    <li className="lastList">(021) 223344</li>
                  </ul>
                </div>

                <div className="follow">
                  <h1 className="iconContainer text-center">
                    <FontAwesomeIcon icon={faBuilding} />
                  </h1>
                  <ul className="followList addr">
                    <li className="firstList">Address</li>
                    <li>:</li>
                    <li className="lastList">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center fw-light fs-6">
            Created with ❤️, CubMu All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
