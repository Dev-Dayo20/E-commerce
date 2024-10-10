import React from "react";
import jacketImage from "../assets/jacketImage.jpg";

const Jacket = () => {
  return (
    <div>
      <section className="section-jacket pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 my-5">
              <img
                src={jacketImage}
                className="img-fluid"
                alt={"Jacket Image"}
              />
            </div>
            <div className="col-md-6 my-5">
              <h3>Beautiful Summer Jacket</h3>
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

export default Jacket;
