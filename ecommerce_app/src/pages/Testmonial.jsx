import React, { useEffect } from "react";
import Header from "../components/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SearchModal from "../components/SearchModal";

function Testmonial() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <SearchModal />
      <Header title={"Testimonial"} />

      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Our Testimonial</h4>
            <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
          </div>
          <div
            className="container mx-auto"
            style={{
              paddingBottom: "20px",
              position: "relative",
            }}
          >
            <div className="row">
              <Carousel
                partialVisible={false}
                autoPlay={true}
                arrows={false}
                autoPlaySpeed={2000}
                draggable
                infinite
                itemClass="carousel-item-padding"
                keyBoardControl
                minimumTouchDrag={80}
                renderDotsOutside
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 2,
                  },
                  mobile: {
                    breakpoint: {
                      max: 700,
                      min: 0,
                    },
                    items: 1,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                <div className="col-12 img-border-radius bg-light rounded p-4">
                  <div className="position-relative">
                    <i
                      className="fa fa-quote-right fa-2x text-secondary position-absolute"
                      style={{ bottom: "30px", right: "0px" }}
                    ></i>
                    <div className="mb-4 pb-4 border-bottom border-secondary">
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s,
                      </p>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-secondary rounded">
                        <img
                          src="img/testimonial-1.jpg"
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Client Name</h4>
                        <p className="m-0 pb-3">Profession</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 img-border-radius bg-light rounded p-4">
                  <div className="position-relative">
                    <i
                      className="fa fa-quote-right fa-2x text-secondary position-absolute"
                      style={{ bottom: "30px", right: "0px" }}
                    ></i>
                    <div className="mb-4 pb-4 border-bottom border-secondary">
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s,
                      </p>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-secondary rounded">
                        <img
                          src="img/testimonial-1.jpg"
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Client Name</h4>
                        <p className="m-0 pb-3">Profession</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 img-border-radius bg-light rounded p-4">
                  <div className="position-relative">
                    <i
                      className="fa fa-quote-right fa-2x text-secondary position-absolute"
                      style={{ bottom: "30px", right: "0px" }}
                    ></i>
                    <div className="mb-4 pb-4 border-bottom border-secondary">
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s,
                      </p>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-secondary rounded">
                        <img
                          src="img/testimonial-1.jpg"
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">Client Name</h4>
                        <p className="m-0 pb-3">Profession</p>
                        <div className="d-flex pe-5">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testmonial;
