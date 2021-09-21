import React from "react";
import Menu from "../../Components/Navbar/Menu";
import developer from "../../Assets/Images/developer.svg";
import styles from "./homepage.module.css";
import Btn from "../../Components/Btn";
import { useHistory } from "react-router-dom";
import FeatureCards from "../../Components/LandingPage/FeatureCards";

import Features1 from "../../Assets/Images/Features1.svg";
import Features2 from "../../Assets/Images/Features2.svg";
import Features3 from "../../Assets/Images/Features3.svg";
import Features4 from "../../Assets/Images/Features4.svg";
import Features5 from "../../Assets/Images/Features5.svg";
import Features6 from "../../Assets/Images/Features6.svg";
import PricingCards from "../../Components/LandingPage/PricingCards";
import Logo from "../../Assets/Images/Logo.png";
import ContactUs from "./ContactUs";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <Menu variant="primary" />

      {/* Hero Section */}
      <div id="heroSection" className="container mt-md-5 mb-5">
        <div className="row pageSection m-0">
          <div className="col-12 col-md-6">
            <div className={styles.heading}>
              Exercitation exercitation voluptate aliqua.
            </div>
            <div className={styles.subHeading}>
              Veniam occaecat dolore culpa amet sit commodo consectetur
              consectetur officia ad eu. Irure laboris Lorem fugiat adipisicing
              officia reprehenderit amet.
            </div>
            <Btn title="Explore" onClick={() => history.push("/login")} />
          </div>
          <div className="col-12 col-md-6">
            <img src={developer} alt="developer" className="mt-3" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="featureSection" className="container pageSection mb-5 mt-5">
        <div className={`${styles.heading} text-center`}>
          TagLine for Feature Section
        </div>
        <div className="row m-0">
          <FeatureCards
            image={Features1}
            title="Title"
            data="Consequat veniam occaecat voluptate reprehenderit adipisicing incididunt voluptate occaecat tempor non in mollit mollit aliquip."
          />
          <FeatureCards
            image={Features2}
            title="Title"
            data="Consequat veniam occaecat voluptate reprehenderit adipisicing incididunt voluptate occaecat tempor non in mollit mollit aliquip."
          />
          <FeatureCards
            image={Features3}
            title="Title"
            data="Consequat veniam occaecat voluptate reprehenderit adipisicing incididunt voluptate occaecat tempor non in mollit mollit aliquip."
          />
          <FeatureCards
            image={Features4}
            title="Title"
            data="Consequat veniam occaecat voluptate reprehenderit adipisicing incididunt voluptate occaecat tempor non in mollit mollit aliquip."
          />
          <FeatureCards
            image={Features5}
            title="Title"
            data="Consequat veniam occaecat voluptate reprehenderit adipisicing incididunt voluptate occaecat tempor non in mollit mollit aliquip."
          />
          <FeatureCards
            image={Features6}
            title="Title"
            data="Consequat veniam occaecat voluptate reprehenderit adipisicing incididunt voluptate occaecat tempor non in mollit mollit aliquip."
          />
        </div>
      </div>

      {/* Our Programs */}
      <div id="programSection" className="pageSection">
        <div className={`${styles.heading} text-center`}>Our Programs</div>
        <div className="row m-0 d-flex justify-content-center">
          <PricingCards
            title="ReactAble"
            cost={399}
            onClick={() => alert("ReactAble")}
            features={["Feature1", "Feature2", "Feature3", "Feature4"]}
          />
          <PricingCards
            title="PrepCheck"
            cost={149}
            onClick={() => alert("PrepCheck")}
            features={["Feature1", "Feature2", "Feature3", "Feature4"]}
          />
          <PricingCards
            title="Profibility"
            cost={499}
            onClick={() => alert("Profibility")}
            features={["Feature1", "Feature2", "Feature3", "Feature4"]}
          />
        </div>
      </div>

      {/* Contact Us */}
      <div name="contactSection" className="pageSection">
        <ContactUs />
      </div>

      {/* Footer */}
      <div
        style={{ backgroundColor: "#f1f2f3" }}
        className="mt-5 d-flex flex-row d-flex justify-content-between align-items-center"
      >
        <img
          src={Logo}
          alt="logo"
          style={{ height: 50, width: 50, margin: 10 }}
        />
        <div style={{ color: "rgb(46, 24, 106)" }}>
          &#169; Heapify React-Able, 2021
        </div>
        <div />
      </div>
    </div>
  );
};

export default HomePage;
