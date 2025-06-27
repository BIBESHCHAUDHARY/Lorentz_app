import React, { useEffect, useState } from "react";
import { useContactMutation } from "../../redux/Api/ContactApi";
import Showmessage from "../common/Showmessage";
import LoadingButton from "../common/LoadingButton";

function Contactform() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [CONTACT, { isLoading }] = useContactMutation();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const api = await CONTACT(contact);
    if (api.error) {
      setError(api.error?.data?.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your Message Send Successfully.");
      setContact({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  useEffect(() => {
    if (success || error) {
      setTimeout(() => {
        setSuccess("");
        setError("");
      }, 4000);
    }
  }, [success, error]);
  return (
    <div>
      {error && <Showmessage message={error} status={"fail"} />}
      {success && <Showmessage message={success} status={"success"} />}
      <form action="" className="" onSubmit={contactForm}>
        <input
          onChange={handleInputChange}
          name="name"
          type="text"
          className="w-100 form-control border-1 py-2 mb-4"
          placeholder="Your Name"
          required
          value={contact.name}
        />
        <input
          onChange={handleInputChange}
          name="email"
          type="email"
          className="w-100 form-control border-1 py-2 mb-4"
          placeholder="Enter Your Email"
          required
          value={contact.email}
        />
        <textarea
          onChange={handleInputChange}
          name="message"
          className="w-100 form-control border-1 mb-4"
          rows="5"
          cols="10"
          placeholder="Your Message"
          required
          value={contact.message}
        ></textarea>
        <button
          className="w-100 btn form-control bg-secondary py-2 text-white "
          type="submit"
        >
          {isLoading ? <LoadingButton /> : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Contactform;
