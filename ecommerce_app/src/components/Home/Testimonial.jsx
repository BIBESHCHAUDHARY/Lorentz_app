import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGetTestimonialQuery } from "../../redux/Api/admin/AdminTestimonial";
import { constant } from "../common/constant";

function Testimonial() {
  const { data } = useGetTestimonialQuery();
  return (
    <div className="container-fluid testimonial ">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h3 className="text-primary">Our Testimonial</h3>
          <h6 className="mb-5 text-dark">Our Client Saying!</h6>
        </div>
        <div
          className="container"
          style={{
            paddingBottom: "20px",
            position: "relative",
          }}
        >
          {data?.data && (
            <Carousel
              partialVisible={false}
              autoPlay={true}
              arrows={false}
              autoPlaySpeed={2000}
              draggable
              infinite
              itemClass="carousel-item-padding"
              keyBoardControl
              minimumTouchDrag={120}
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
              {data?.data?.map((item) => (
                <div className="col-12 img-border-radius bg-light rounded p-4">
                  <div className="position-relative">
                    <div className="mb-4 border-bottom pb-2 border-secondary">
                      <p className="mb-0 testimonialheight subtitlehero">
                        {item?.description}
                      </p>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="bg-secondary rounded">
                        <img
                          src={`${constant?.IMAGEURL}/${item?.image}`}
                          className="img-fluid rounded"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h6 className="text-dark">{item?.name}</h6>
                        <p className="m-0 pb-3">{item?.profession}</p>
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
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
