import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="footer-menu-list">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Ultras</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <Link to={"/about-us"}>About Us</Link>
                    </li>
                    <li className="menu-item">
                      <Link to={"/contact-us"}>COntact Us</Link>
                    </li>
                    <li className="menu-item">
                      <a href="#">Our Journal</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Careers</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Affiliate Programs</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Ultras Press</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Ultras</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <a href="#">About Us</a>
                    </li>
                    <li className="menu-item">
                      <a href="#"> Condition</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Our Journal</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Careers</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Affiliate Programs</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Ultras Press</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Ultras</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <a href="#">About Us</a>
                    </li>
                    <li className="menu-item">
                      <a href="#"> Condition</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Our Journal</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Careers</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Affiliate Programs</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Ultras Press</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Ultras</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <a href="#">About Us</a>
                    </li>
                    <li className="menu-item">
                      <a href="#"> Condition</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Our Journal</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Careers</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Affiliate Programs</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Ultras Press</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </footer>
      <div id="footer-bottom">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap justify-content-between">
            <div className="copyright">
              <p>
                VeexShopify.ng
                <a href="#">Lorem ipsum dolor sit amet.</a>
              </p>
            </div>
            <div className="payment-method d-flex">
              <div className="card-wrap">
                <p>UBA</p>
                <p>Acces Bank</p>
                <p>Union Bank</p>
              </div>
            </div>
            <section>
              <div className="d-flex justify-content-center">
                <p>
                  <h2 className="veex-shopify">Veex.Shopify</h2>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
