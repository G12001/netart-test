import React from "react";
import brandLogo from "./asserts/logo.png";
import award from "./asserts/1.png";
import awardGiving from "./asserts/2.png";
import products from "./asserts/3.png";
import callIcon from "./assets/telephone-call.png";
import facebookIcon from "./assets/facebook.png";
import webIcon from "./assets/web.png";

const App = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={brandLogo} alt="brand logo" />
      </div>
      <div className="main-div">
        <div className="award">
          <img src={award} alt="brand logo" />
        </div>
        <div className="main-content">
          <p className="title">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={awardGiving} alt="award giving" />
          <p>
            Government of India has awarded the{" "}
            <span style={{ fontWeight: "bold" }}>
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State
          </p>
        </div>
      </div>
      <div className="products">
        <p className="title2">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={products} alt="products" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr className="red-line" />
      <div className="footer-1">
        <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p className="segments">
          CHEMICALS & PROCESS{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span> POWER{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span> WATER &
          WASTE WATER{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span> OILS & GAS{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span>
          PHARMA <span style={{ color: "red", fontWeight: "bold" }}>
            |
          </span>{" "}
          SUGARS & DISTILLERIES{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span> PAPER &
          PULP <span style={{ color: "red", fontWeight: "bold" }}>|</span>{" "}
          MARINE & DEFENCE{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span>
          METAL & MINING{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span> FOOD &
          BEVERAGE <span style={{ color: "red", fontWeight: "bold" }}>|</span>{" "}
          PETROCHEMICAL & REFINERIES{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span> SOLAR
          <span style={{ color: "red", fontWeight: "bold" }}>
            |
          </span> BUILDING{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span> HVAC{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>|</span> FIRE
          FIGHTING <span style={{ color: "red", fontWeight: "bold" }}>|</span>{" "}
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="footer">
        <div className="item">
          <img src={callIcon} alt="call icon" />
          <p>Toll free 1800 200 1234</p>
        </div>
        <div className="item">
          <img src={facebookIcon} alt="facebook icon" />
          <p>www.facebook.com/cripumps</p>
        </div>
        <div className="item">
          <img src={webIcon} alt="web icon" />
          <p>www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
};

export default App;
