import React from "react";
import "./home.css";
import Bottom from "../Assets/bottom.png";

const ContactSection = () => {
  return (
    <div>
      <header>
        <div style={{ margin: "8rem auto auto auto" }}>
          <img src={Bottom} alt="bottom" style={{ width: "100%" }} />
        </div>
        <hr
          style={{
            width: "20vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
            fontWeight: "bold",
            margin: "8rem auto 2rem auto",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            margin: "2rem auto 4rem auto",
          }}
        >
          <p>REQUEST A CALL BACK</p>
        </div>
        <div
          style={{
            maxWidth: "60vw",
            display: "flex",
            margin: "auto auto 2rem auto",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <input className="input" type="text" placeholder="NAME*" />
          <input className="input" type="text" placeholder="MOBILE*" />
          <input className="input" type="text" placeholder="EMAIL*" />
        </div>
        <div
          style={{
            display: "flex",
            margin: "3rem auto 2rem auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              height: "4vh",
              width: "8vw",
              border: "1px solid gray",
              cursor: "pointer",
              color: "gray",
              fontFamily: "unset",
            }}
          >
            SUBMIT
          </button>
        </div>
        <hr
          style={{
            width: "80vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray",
            color: "gray",
            margin: "8rem auto 2rem auto",
          }}
        />
      </header>
    </div>
  );
};

export default ContactSection;
