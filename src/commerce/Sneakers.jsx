import React from "react";
import sneakersImage from "../assets/sneakersImage.jpg";

const Sneakers = () => {
  return (
    <div>
      <section className="section-sneakers pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 my-5">
              <img
                src={sneakersImage}
                className="img-fluid"
                alt={"Sneakers Image"}
              />
            </div>
            <div className="col-md-6 my-5">
              <h3>Style in Elegat with our Sneakers</h3>
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
      <section className="d-flex justify-content-center">
        <div className="container">
          <p className="fs-3 text-align-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            enim provident itaque repudiandae repellendus quae saepe vel
            excepturi? Ipsam illo facilis vero at modi blanditiis dicta repellat
            quis amet voluptatibus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sneakers;
