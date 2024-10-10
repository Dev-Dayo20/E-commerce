import React from "react";
import "../styles/Contact.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VeexShopify from "../assets/VeexShopify.png";

const Contact = () => {
  return (
    <div>
      <section className="message-box py-5">
        <div className="container">
          <div id="msg-box">
            <div className="d-flex flex-column flex-wrap align-items-center justify-content-center">
              <img
                src={VeexShopify}
                alt="Brand Logo"
                className="img-fluid"
                style={{ height: "7rem", width: "7rem" }}
              />
              <p className="fs-4 text-success fw-bold">VeexShopify.ng</p>
              <h1 className="text-align-center">We've been waiting for you.</h1>
              <p className="fs-4 text-danger">
                We want to hear from you. Let us know how we can help
              </p>
            </div>
            <div>
              <form action="">
                <label htmlFor="Email" className="form-label mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                ></input>
                <label htmlFor="Name" className="form-label mb-3">
                  Enter Your Name
                </label>
                <input
                  type="name"
                  class="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Your Name Here"
                ></input>
                <label htmlFor="Number" className="form-label mb-3">
                  Enter Your Phone Number
                </label>
                <input
                  type="Number"
                  class="form-control mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Your Number Here"
                ></input>
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label mb-3"
                >
                  Example textarea
                </label>
                <textarea
                  class="form-control mb-4"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <div className="d-grid gap-2">
                  <button className="btn btn-success">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
