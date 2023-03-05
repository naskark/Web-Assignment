import React from "react";
import Puri from "../Assets/Puri1.png";
import logo from "../Assets/logo.png";
import "./home.css";
import Arravalli from "../Assets/Arravallis.png";
import Delivered from "../Assets/Delivered.png";
import Aanandvilas from "../Assets/Aanandvilas.png";

const home = () => {
  return (
    <div>
      <header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h1 style={{ fontSize: "25px" }}>PURI</h1>
          </div>
        </div>
        <div className="head-text">
          <div className="head-image">
            <img
              src={Puri}
              alt="Freedom Blog"
              style={{ width: "80%", height: "75vh" }}
            />
          </div>

          <div class="text-on-image">
            <div className="side-border"></div>
            <h3 style={{ fontSize: "25px" }}>
              {" "}
              CRAFTING EXCEPTIONAL LIFESTYLE ACROSS DELHI NCR{" "}
            </h3>
          </div>
        </div>

        <div className="ar-head-text">
          <div className="ar-head-image">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="ar-side-border"></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              >
                <h5>NEW LAUNCH</h5>
              </div>
            </div>
            <img src={Arravalli} alt="Freedom Blog" />
            <button
              style={{
                margin: "2rem auto 2rem 44rem",
                backgroundColor: "white",
                border: "1px solid gray",
                borderRadius: "5px",
                height: "4vh",
                width: "8vw",
                cursor: "pointer",
              }}
            >
              Know More
            </button>
          </div>

          <div class="ar-text-on-image">
            <h2> THE ARAVALLIS </h2>
            <p>Sector 61, Gurugram</p>
            <div>
              <hr
                style={{
                  width: "1vw",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  color: "gray",
                  fontWeight: "bold",
                }}
              />
            </div>
            <p>10 min. from horizon center</p>
            <div>
              <hr
                style={{
                  width: "1vw",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  color: "gray",
                  fontWeight: "bold",
                }}
              />
            </div>
            <p>High end specifications</p>
            <div>
              <hr
                style={{
                  width: "1vw",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  color: "gray",
                  fontWeight: "bold",
                }}
              />
            </div>
            <p>Luxury club house</p>
          </div>
        </div>

        <div className="dl-head-text">
          <div className="dl-head-image">
            <img src={Delivered} alt="Freedom Blog" />
          </div>

          <div class="dl-text-on-image">
            <div className="dl-side-border"></div>
            <div style={{ fontSize: "2rem" }}>DELIVERED</div>

            {/* <div className="dl-side-border"></div> */}
            <h3>DIPLOMATIC GREENS</h3>
            <h5>Location</h5>
            <p>Sector 110 A & 111, Gurgaon</p>
            <h5>PROPERTY TYPE</h5>
            <p>Diplomatic Greens Apartments</p>
            <p style={{ marginTop: "0px" }}>Residential.</p>

            <p style={{ marginTop: "1rem" }}>
              Diplomatic Greens ensure the world
            </p>
            <p style={{ marginTop: "0px" }}>
              {" "}
              is indeed your oyster. The property's{" "}
            </p>
            <p style={{ marginTop: "0px" }}>
              vantage location ensures you stay
            </p>
            <p style={{ marginTop: "0px" }}>
              connected, networked and in the midst
            </p>
            <p style={{ marginTop: "0px" }}>of urban amenities.</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            margin: "2rem auto 2rem auto",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              color: "gray",
              border: "1px solid gray",
              borderRadius: "5px",
              height: "4vh",
              width: "10vw",
            }}
          >
            VIEW ALL PROJECTS
          </button>
        </div>
        <div className="an-head-text">
          <div className="an-head-image">
            <img src={Aanandvilas} alt="Freedom Blog" />
          </div>

          <div class="an-text-on-image">
            <h3> DELIVERING QUALITY IN </h3>
            <h3> EACH ENDEAVOUR </h3>
            <p>Every project has a distinctive Puri design</p>
            <p>language which has become synonymous with</p>
            <p>refined living in Delhi NCR. South-East Asian</p>
            <p>inspired landscaping and ultra luxurious watch</p>
            <p>clubhouses are some of the things which can</p>
            <p>be seen in every project of Puri Constructions</p>
            <button
              style={{
                backgroundColor: "white",
                border: "1px solid gray",
                color: "gray",
                borderRadius: "5px",
                height: "4vh",
                width: "8vw",
              }}
            >
              DISCOVER MORE
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default home;
