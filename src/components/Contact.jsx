import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import FadeIn from "react-fade-in";
import { useState } from "react";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [toggle, setToggle] = useState(false);

  let sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_poglh8t",
        "template_66q5rqu",
        e.target,
        "user_ziDDyTQ1D68VuRcAhcIWJ"
      ).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <FadeIn>
      <MDBCard
        className="card-image z-depth-4 bouncing"
        style={{
          border: "2px black",
          borderRadius: "40px",
          backgroundImage: "url('https://i.imgur.com/LwkqGAx.jpg')",
          cursor: "pointer",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => setToggle(true)}
      >
        <div
          className="ripple text-white text-center d-flex align-items-center rgba-black-strong py-5 px-5"
          style={{ border: "2px black", borderRadius: "40px" }}
        >
          <div>
            <MDBCardTitle tag="h3" className="pt-2">
              <strong style={{ margin: "25px" }}>Contact</strong>
            </MDBCardTitle>
          </div>
        </div>
      </MDBCard>

      <MDBContainer>
        <MDBModal isOpen={toggle}>
          <MDBContainer style={{ backgroundColor: "#748F9A" }}>
            <MDBRow>
              <MDBCol>
                <form onSubmit={sendEmail}>
                  <p className="h4 text-center mb-4">
                    Please allow me up to 24 hours to respond
                  </p>
                  <label
                    htmlFor="defaultFormContactNameEx"
                    style={{ color: "black" }}
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactNameEx"
                    className="form-control"
                    name="from_name"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactEmailEx"
                    style={{ color: "black" }}
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="defaultFormContactEmailEx"
                    className="form-control"
                    name="from_email"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactSubjectEx"
                    style={{ color: "black" }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactSubjectEx"
                    className="form-control"
                    name="subject"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormContactMessageEx"
                    style={{ color: "black" }}
                  >
                    Your message
                  </label>
                  <textarea
                    type="text"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="3"
                    name="message"
                  />
                  <div className="text-center mt-4">
                    <MDBBtn color="dark" outline type="submit">
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <div style={{ paddingTop: "30px", backgroundColor: "#748F9A" }}>
            <MDBBtn color="dark" onClick={() => setToggle(false)}>
              Close
            </MDBBtn>
          </div>
        </MDBModal>
      </MDBContainer>
    </FadeIn>
  );
};
