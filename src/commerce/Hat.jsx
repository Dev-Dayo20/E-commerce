import React from "react";
import hatImage from "../assets/hatImage.jpg";
import "../styles/Hat.css";

const Hat = () => {
  return (
    <div>
      <section className="section-hat">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 my-5">
              <img
                src={hatImage}
                className="img-fluid"
                alt={"Hat Image"}
                id="hat-image"
              />
            </div>
            <div className="col-md-6 mb-3">
              <h3>Beautiful Hat For You</h3>
              <p className="fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dignissimos culpa voluptatem corporis explicabo dolorem fugiat
                corrupti cupiditate! Est porro, perspiciatis iure maiores
                voluptatibus doloribus nesciunt voluptas exercitationem tempore
                similique.
              </p>
              <button className="btn btn-success">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hat;
