import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import shoppingGirl from "../assets/shoppingGirl.png";
import hatImage from "../assets/hatImage.jpg";
import jacketImage from "../assets/jacketImage.jpg";
import sneakersImage from "../assets/sneakersImage.jpg";
import sunglassImage from "../assets/sunglassImage.jpg";
import trousersImage from "../assets/trousersImage.jpg";
import watchImage from "../assets/watchImage.jpg";
import shoppingVector from "../assets/shoppingVector.png";
import VeexShopify from "../assets/VeexShopify.png";

const Home = () => {
  return (
    <>
      <section className="welcome-head">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-content">
              <div className="logo-block d-flex align-items-center flex-wrap">
                <img
                  src={VeexShopify}
                  alt="VeexShopify Logo"
                  className="img-fluid my-3"
                  style={{ height: "3rem", width: "3rem" }}
                />
                <div className="logo-block-title">
                  <p className="fs-4">
                    <span className="the-title">VeexShopify.ng</span>
                  </p>
                </div>
              </div>
              <h1>
                <span>
                  <strong>Summer Collection</strong>
                </span>
              </h1>
              <p className="fs-5 my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit earum ex placeat temporibus modi sequi sed aliquid ea
                possimus dolorum.
              </p>
              <button type="button" className="btn btn-success mb-4">
                SHOP IT NOW
              </button>
              <p className="fs-4">We aim to serve you better!</p>
            </div>
            <div className="col-md-6">
              <img
                src={shoppingVector}
                alt="summer collection"
                className="img-fluid"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="girl-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <img
                src={shoppingGirl}
                alt="shopping-girl"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-3 col-md-6 my-5">
              <button type="button" className="btn btn-success">
                EXPLORE
              </button>
              <p className="fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, vero?
              </p>
              <div className="Lead">
                <h2>We Gat You</h2>
                <p className="fs-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, vero?
                </p>
              </div>
              <button type="button" className="btn btn-success">
                SEE MORE
              </button>
              <p className="fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, vero?
              </p>
            </div>
          </div>
        </div>
      </section>
      <article className="featured-products mb-5">
        <div className="container">
          <section>
            <div>
              <p className="Lead Lead-1 fw-bold my-5 fs-2">Featured Products</p>
            </div>
          </section>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 my-5">
              <Link to={"/hat"}>
                <div className="card">
                  <img
                    src={hatImage}
                    className="card-img-top"
                    alt={"Hat Image"}
                  />
                  <div className="card-body">
                    <p className="card-text fs-3">
                      Top off your style with our latest hat collection.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 my-5">
              <Link to={"/jacket"}>
                <div className="card">
                  <img
                    src={jacketImage}
                    className="card-img-top"
                    alt={"Jacket Image"}
                  />
                  <div className="card-body">
                    <p className="card-text fs-3">
                      Stay warm and stylish with our trendy jackets.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-5">
              <Link to={"/sneakers"}>
                <div className="card">
                  <img
                    src={sneakersImage}
                    className="card-img-top"
                    alt={"Sneakers Image"}
                  />
                  <div className="card-body">
                    <p className="card-text fs-3">
                      Step up your game with our latest sneakers
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-5">
              <Link to={"/sunglass"}>
                <div className="card">
                  <img
                    src={sunglassImage}
                    className="card-img-top"
                    alt={"sunglass Image"}
                  />
                  <div className="card-body">
                    <p className="card-text fs-3">
                      Shade your eyes in style with our chic sunglasses
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-5">
              <Link to={"/trousers"}>
                <div className="card">
                  <img
                    src={trousersImage}
                    className="card-img-top"
                    alt={"trouser Image"}
                  />
                  <div className="card-body">
                    <p className="card-text fs-3">
                      Perfect fit, perfect look—explore our trousers range.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-5">
              <Link to={"/watch"}>
                <div className="card">
                  <img
                    src={watchImage}
                    className="card-img-top"
                    alt={"watch Image"}
                  />
                  <div className="card-body">
                    <p className="card-text fs-3">
                      Keep time in style with our elegant watches.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
