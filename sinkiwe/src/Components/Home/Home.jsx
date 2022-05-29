import React, { useEffect, useState } from "react";
import "./home.scss";
import Image from "../../Images/Hero_image.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Loader";
import Header from "../Header/Header";

function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    fakeRequest().then(() => {
      setLoading(false);
    });
  }, []);

  const fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };

  return (
    <>
      <Header />
      <div className="home">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="hero-image">
              <img src={Image} className="img" alt="" />
            </div>
            <div className="heading">
              <h4
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                SINIKIWE
              </h4>
              <div className="sub-heading">
                <h5
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  photographer
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
