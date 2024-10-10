import React from "react";
import sunglassImage from "../assets/sunglassImage.jpg";

const Sunglass = () => {
  return (
    <div>
      <section className="section-hat py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={sunglassImage}
                className="img-fluid"
                alt={"Hat Image"}
              />
            </div>
            <div className="col-md-6">
              <h3>Beautiful Sunglass</h3>
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

export default Sunglass;
