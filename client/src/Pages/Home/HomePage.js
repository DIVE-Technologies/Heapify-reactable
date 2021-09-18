import React from "react";
import Menu from "../../Components/Navbar/Menu";
import developer from "../../Assets/Images/developer.svg";
import styles from "./homepage.module.css";
import Btn from "../../Components/Btn";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <Menu variant="primary" />

      {/* Hero Section */}
      <div className="container mt-md-5 mb-5">
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
      <div className="container pageSection mb-5">
          <div className={`${styles.heading} text-center`}>TagLine for Feature Section</div>
        <div className="row m-0"></div>
      </div>
    </div>
  );
};

export default HomePage;
