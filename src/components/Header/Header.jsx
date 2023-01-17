import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-danger">CubMu</a>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page">
                  Live Tv
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategori
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">Main</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Travel</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Fashion</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Entertainment</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Baverages</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page">
                  Catch Up
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page">
                  My List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
