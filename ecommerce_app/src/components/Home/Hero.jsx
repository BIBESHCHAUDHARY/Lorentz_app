import React from "react";

function Hero() {
  return (
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="rounded">
            <img
              className="d-md-none img-fluid w-100 responsiveimage  rounded"
              src="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?fm=jpg&q=60&w=3000"
              alt="randomimage"
            />
          </div>
          <div className="col-md-12 col-lg-6">
            <h5>Welcome to your website</h5>
            <p className="stock">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              omnis minima corrupti voluptate inventore, sapiente tempora
              provident minus maxime, voluptas nam vel quas at deserunt laborum
              impedit unde enim aspernatur asperiores. Cumque vel odit
              necessitatibus. Eum provident nesciunt officiis. Temporibus.
            </p>
          </div>

          <div className="d-none d-md-block col-md-12 col-lg-6">
            <div
              id="carouselId"
              className="carousel slide position-relative"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active rounded">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?fm=jpg&q=60&w=3000"
                    className="img-fluid w-100 h-100 bg-secondary rounded"
                    alt="Slide 1"
                  />
                </div>
                <div className="carousel-item rounded">
                  <img
                    src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg"
                    className="img-fluid w-100 h-100 bg-secondary rounded"
                    alt="Slide 2"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
