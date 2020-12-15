import React from "react";
import { MDBCard, MDBCardTitle } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import FadeIn from "react-fade-in";

export const Github = () => {
  // mitigates security risk of using _blank. Read more here: https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <FadeIn>
      <MDBCard
        className="card-image z-depth-4 bouncing"
        onClick={() => {
          openInNewTab("https://github.com/guygreenleaf");
        }}
        style={{
          border: "2px black",
          borderRadius: "40px",
          backgroundImage: "url('https://i.imgur.com/bL51l35.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
      >
        <div
          className="ripple text-white text-center d-flex rgba-black-strong py-5 px-5"
          style={{ border: "2px black", borderRadius: "40px" }}
        >
          <div>
            <MDBCardTitle tag="h3" className="pt-2">
              <strong style={{ margin: "25px" }}>GitHub</strong>
            </MDBCardTitle>
          </div>
        </div>
      </MDBCard>
    </FadeIn>
  );
};
