import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChartBar,
  faCopy,
  faMarker,
  faUserGear,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const handleClick = (e) => {
    alert("Feature Under Development");
  };

  // Icons
  const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />;
  const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
  const faCopyIcon = <FontAwesomeIcon icon={faCopy} />;
  const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />;
  const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />;
  const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />;
  return (
    <>
      <div id="services">
        <div className="container">
          <div className="title_headling">
            <h3>Great Benefits from F13</h3>
            <p>
              We leverage our expertise across multiple industries and business
              functions to drive technology-led business breakthroughs..
            </p>
          </div>
          <div className="service_wrapper">
            <div className="service_box">
              <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
              <h4 className="number">01</h4>
              <div className="service_content">
                <h5>Cloud Computing</h5>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a onClick={handleClick} className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">{faChartBarIcon}</div>
              <h4 className="number">02</h4>
              <div className="service_content">
                <h5>Business Strategy</h5>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a onClick={handleClick} className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon green_icon">{faCopyIcon}</div>
              <h4 className="number">03</h4>
              <div className="service_content">
                <h5>Media & Publishing</h5>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a onClick={handleClick} className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">{faMarkerIcon}</div>
              <h4 className="number">04</h4>
              <div className="service_content">
                <h5>Public Sector</h5>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a onClick={handleClick} className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon green_icon">{faUserGearIcon}</div>
              <h4 className="number">05</h4>
              <div className="service_content">
                <h5>Travel and Logistics</h5>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a onClick={handleClick} className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon blue_icon">{faCoinsIcon}</div>
              <h4 className="number">06</h4>
              <div className="service_content">
                <h5>Real Estate & Arhictecture</h5>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a onClick={handleClick} className="read">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
