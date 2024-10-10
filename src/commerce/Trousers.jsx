import React from "react";
import trousersImage from "../assets/trousersImage.jpg";

const Trousers = () => {
  return (
    <div>
      <section className="section-trouser pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 my-5">
              <img
                src={trousersImage}
                className="img-fluid"
                alt={"Trouser Image"}
              />
            </div>
            <div className="col-md-6">
              <h4>Elegant Trousers For You</h4>
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

export default Trousers;
