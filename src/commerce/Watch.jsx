import React from "react";
import watchImage from "../assets/watchImage.jpg";

const Watch = () => {
  return (
    <div>
      <section className="section-hat mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5>Hat</h5>
              <img src={watchImage} className="img-fluid" alt={"Hat Image"} />
            </div>
            <div className="col-md-6">
              <h4>Keep time in style with our elegant watches.</h4>
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

export default Watch;
