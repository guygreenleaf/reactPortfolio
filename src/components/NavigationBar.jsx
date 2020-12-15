import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import FadeIn from "react-fade-in";

export function NavigationBar() {
  return (
    <header>
      <MDBContainer fluid>
        <FadeIn transitionDuration="850">
          <MDBRow
            className="border-bottom  p-3"
            style={{ backgroundColor: "#343A40" }}
          >
            <MDBCol
              style={{
                fontFamily: "Josefin Sans",
                fontSize: "32px",
                color: "white",
              }}
            >
              Guy Greenleaf
            </MDBCol>
          </MDBRow>
        </FadeIn>
      </MDBContainer>
    </header>
  );
}
