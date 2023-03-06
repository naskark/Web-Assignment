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
          }}
        >
          <div>
            <h4>CORPORATE & REGISTERED OFFICE</h4>
          </div>
          <div>
            <p style={{ fontSize: "14px" }}>
              Puri Construction Private Limited <br />
              4-7B, Ground Floor, Tolstoy House,
              <br />
              15 & 17, Tolstoy Marg
              <br />
              New Delhi - 110 001
              <br />
              CIN: U45201DL1971PTC005522
            </p>
          </div>
        </div>
        <div>
          <div>
            <h4>MARKETING OFFICE</h4>
          </div>
          <div>
            <p style={{ fontSize: "14px" }}>
              Puri Construction Private Limited <br />
              11 -12A, Ground Floor, Tolstoy House,
              <br />
              15 & 17, Tolstoy Marg, New Delhi - 110001
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
