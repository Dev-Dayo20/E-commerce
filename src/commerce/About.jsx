import React from "react";
import "../styles/About.css";
import hatImage from "../assets/hatImage.jpg";
import jacketImage from "../assets/jacketImage.jpg";
import trousersImage from "../assets/trousersImage.jpg";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsCartDash } from "react-icons/bs";
import { RiQuestionnaireFill } from "react-icons/ri";

const About = () => {
  return (
    <div>
      <section className="first-page">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-sm-12 col-md-6">
              <div className="page-title">
                <h1>
                  <span className="fs-1">
                    <strong> About Us</strong>
                  </span>
                </h1>
                <p className="fs-4">We are special summer collections</p>
                <p className="fs-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati et provident quae veniam repellendus inventore
                  placeat ratione ut, sunt earum!
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="page-title flex-wrap">
                <h3 className="text-align-left">
                  How was
                  <span className="veex-shopify-color">
                    <strong>VeexShopify.ng</strong>
                  </span>
                  Started
                </h3>
                <p className="fs-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                  dolore veniam tempora excepturi cumque officiis magnam
                  accusantium delectus eos, aperiam deserunt harum consequatur
                  voluptatibus at laboriosam est doloremque minima explicabo.
                </p>
                <button className="btn btn-success">SHOP OUR STORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="icon-box d-flex flex-wrap align-items-center">
                <div className="icon fs-1 text-success">
                  <FaShippingFast />
                </div>
                <h6 className="block-title mx-3">
                  <strong>Free Shipping</strong>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="icon-box d-flex flex-wrap align-items-center">
                <div className="icon fs-1 text-success">
                  <FaMoneyBillTransfer />
                </div>
                <h6 className="block-title mx-3">
                  <strong>Money Back "Return in 7 days" </strong>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="icon-box d-flex flex-wrap align-items-center">
                <div className="icon fs-1 text-success">
                  <BsCartDash />
                </div>
                <h6 className="block-title mx-3">
                  <strong>Buy 4 get 5th</strong>
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="icon-box d-flex flex-wrap align-items-center">
                <div className="icon fs-1 text-success">
                  <RiQuestionnaireFill />
                </div>
                <h6 className="block-title">
                  <strong>Any Questions? Expert Are Ready</strong>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-journal">
        <div className="container">
          <div className="flex d-flex flex-wrap align-items-center justify-content-between">
            <h2 className="">Our Journal</h2>
          </div>
          <div className="row d-flex flex-wrap">
            <article className="col-sm-12 col-md-4 post-item">
              <div className="image-holder zoom effect">
                <img src={hatImage} alt="Hat Image" />
                <div className="post-content d-flex">
                  <div className="meta-day text-primary">22</div>
                  <div className="meta-month"> Aug-2024</div>
                  <div className="post-header">
                    <h5 className="post-title">
                      Best Summer Hat collection for you. Ready for take off
                    </h5>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-sm-12 col-md-4 post-item">
              <div className="image-holder zoom effect">
                <img src={jacketImage} alt="Hat Image" />
                <div className="post-content d-flex">
                  <div className="meta-day text-primary">22</div>
                  <div className="meta-month"> Aug-2024</div>
                  <div className="post-header">
                    <h5 className="post-title">
                      Best Summer Winter Jacket collection for you. Ready for
                      take off
                    </h5>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-sm-12 col-md-4 post-item">
              <div className="image-holder zoom effect">
                <img src={trousersImage} alt="Hat Image" />
                <div className="post-content d-flex">
                  <div className="meta-day text-primary">22</div>
                  <div className="meta-month"> Aug-2024</div>
                  <div className="post-header">
                    <h5 className="post-title">
                      Best Summer Trousers Collection for you. Ready for take
                      off
                    </h5>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
