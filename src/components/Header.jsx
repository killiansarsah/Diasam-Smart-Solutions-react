import React, { useState } from "react";

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <React.Fragment>
      {/* START HEADER */}
      <div
        className={`wrap_container cursor-light ${
          isSideNavOpen ? "side-nav-open" : ""
        }`}
      >
        <div className="main_container">
          <div className="side_nav">
            <div className="my-sticky-nav">
              <div className="side_menu">
                <a className="brand-logo link" href="#home-banner">
                  <img
                    src="/agency-hotspot/images/diasam_logo.png"
                    alt="logo"
                    style={{ height: "87%", width: "60%" }}
                  />
                </a>
                <div
                  id="my_tog"
                  className="my_tog link"
                  onClick={toggleSideNav}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div>
                  <a
                    className="brand-logo sticky-logo link"
                    href="#home-banner"
                  >
                    <img
                      src="/agency-hotspot/images/logo.png"
                      alt="logo"
                      style={{ height: "80%", width: "80%" }}
                    />
                  </a>
                </div>
                {/* Sticky Nav */}
                <nav className="side-nav-menu">
                  <ul className="nav-menu nav-fill" id="menu">
                    <li className="nav-item">
                      <a
                        data-menuanchor="home-banner"
                        className="nav-link link active line"
                        href="#home-banner"
                      >
                        Home{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-menuanchor="about"
                        className="nav-link link line"
                        href="#about"
                      >
                        Our Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-menuanchor="team"
                        className="nav-link link line"
                        href="#team"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-menuanchor="portfolio"
                        className="nav-link link line"
                        href="#portfolio"
                      >
                        Our Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        data-menuanchor="contact"
                        className="nav-link link line"
                        href="#contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="social-icons">
                    <span>
                      <a href="javascript:void(0);">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a href="javascript:void(0);">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </span>
                    <span>
                      <a href="javascript:void(0);">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </span>
                  </div>
                  <p className="rites-res link">
                    <span style={{ color: "#000000", fontSize: "12px" }}>
                      &copy; {new Date().getFullYear()} Diasam. All rights
                      reserved.
                    </span>
                  </p>
                </nav>
              </div>
            </div>
          </div>
          {/* Nav-Bar */}
          <header id="home" style={{ zIndex: 999999 }}>
            <nav className="navbar navbar-light cursor-light d-md-none mobile-nav">
              <a className="navbar-brand" href="#home-banner">
                <img
                  src="/agency-hotspot/images/diasam_logo.png"
                  alt="Logo"
                  className="mobile-logo"
                />
              </a>
              <div
                className="my_nav_tog d-block d-md-none ml-auto"
                onClick={toggleSideNav}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
            <div className={`broad ${isSideNavOpen ? "broad-nav" : ""}`}>
              <span
                className="btn-close"
                id="btn_sideNavClose"
                onClick={toggleSideNav}
              >
                <i></i>
                <i></i>
              </span>
              <nav className="side-nav-menu">
                <a className="brand-logo" href="#home-banner">
                  <img
                    src="/agency-hotspot/images/logo.png"
                    alt="Logo"
                    style={{ height: "90%", width: "90%" }}
                  />
                </a>
                <ul className="nav-menu nav-fill">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#home-banner"
                      onClick={toggleSideNav}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#about"
                      onClick={toggleSideNav}
                    >
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#team"
                      onClick={toggleSideNav}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#portfolio"
                      onClick={toggleSideNav}
                    >
                      Our Works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#contact"
                      onClick={toggleSideNav}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="social-icons">
                  <span>
                    <a href="javascript:void(0);">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </span>
                  <span>
                    <a href="javascript:void(0);">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </span>
                  <span>
                    <a href="javascript:void(0);">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </span>
                </div>
                <p className="rites-res">
                  <span>
                    &copy; {new Date().getFullYear()} Diasam. All rights
                    reserved.
                  </span>
                </p>
              </nav>
            </div>
          </header>
        </div>
      </div>
      {/* END HEADER */}
    </React.Fragment>
  );
};

export default Header;
