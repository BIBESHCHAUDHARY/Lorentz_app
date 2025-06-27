import React, { useEffect } from "react";
import Header from "../components/Header";
import Contactform from "../components/contact/Contactform";
import SearchModal from "../components/SearchModal";

function Contact() {
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
      <Header title={"Contact"} />
      <div className="container contact ">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div className="text-center mx-auto">
                  <h3 className="text-primary">Contact Us</h3>
                  <p className="mb-4 subtitlehero text-center ">
                    Got a question? We'd love to hear from you. Send us a
                    message and we'll respond as soon as possible.
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                <Contactform />
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-3 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt iconsize text-primary me-4"></i>
                  <div>
                    <h5>Address</h5>
                    <p className="mb-2 subtitlehero">123 Street New York.USA</p>
                  </div>
                </div>
                <div className="d-flex p-3 rounded mb-4 bg-white">
                  <i className="fas fa-envelope iconsize text-primary me-4"></i>
                  <div>
                    <h5>Mail Us</h5>
                    <p className="mb-2 subtitlehero">info@example.com</p>
                  </div>
                </div>
                <div className="d-flex p-3 rounded bg-white">
                  <i className="fa fa-phone-alt iconsize text-primary me-4"></i>
                  <div>
                    <h5>Telephone</h5>
                    <p className="mb-2 subtitlehero">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
