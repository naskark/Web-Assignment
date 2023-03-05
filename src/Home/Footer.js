import React from "react";
import Logo from "../Assets/logo.png";
import "./home.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </footer>
      <footer className="footer">
        <div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
              }}
            >
              <h5>FOR GURGAON</h5>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p>Toll free Number</p>
              <p style={{ paddingLeft: "100px" }}>1800 123 6244</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
                color: "gray",
              }}
            >
              <p>Email</p>
              <p style={{ paddingLeft: "150px" }}>sales@puricontructions.com</p>
            </div>
          </div>
          <div style={{ margin: "4rem auto 2rem auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
              }}
            >
              <h5>FOR FARIDABAD</h5>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p>Toll free Number</p>
              <p style={{ paddingLeft: "100px" }}>1800 123 6244</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
                color: "gray",
              }}
            >
              <p>Email</p>
              <p style={{ paddingLeft: "150px" }}>sales@puricontructions.com</p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer2">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            margin: "auto",
          }}
        >
          <div>
            <h5>CORPORATE & REGISTERED OFFICE</h5>
          </div>
          <div>
            <p>Puri Construction Private Limited</p>
            <p>4-7B, Ground Floor, Tolstoy House,</p>
            <p>15 & 17, Tolstoy Marg</p>
            <p>New Delhi - 110 001</p>
            <p>CIN: U45201DL1971PTC005522</p>
          </div>
        </div>
        <div>
          <div>
            <h5>MARKETING OFFICE</h5>
          </div>
          <div>
            <p>Puri Construction Private Limited</p>
            <p>11 -12A, Ground Floor, Tolstoy House,</p>
            <p>15 & 17, Tolstoy Marg, New Delhi - 110001</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
