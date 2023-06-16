import React from "react";
import { Carousel } from "antd";
import "./VR.scss";

export default function VR() {
  return (
    <>
      <div className="vr-case">
        <h1>vr线上课程</h1>
        <Carousel arrows={true} effect="fade">
          <div className="container">
            <img src="images/vr/1.jpg" alt="" />
          </div>
          <div className="container">
            <img src="images/vr/2.jpg" alt="" />
          </div>
          <div className="container">
            <img src="images/vr/3.jpg" alt="" />
          </div>
          <div className="container">
            <img src="images/vr/5.jpg" alt="" />
          </div>
          <div className="container">
            <img src="images/vr/8.jpg" alt="" />
          </div>
        </Carousel>
      </div>

      <div className="vr-middle">
        <div className="container">
          <img src="images/vr/4.jpg" alt="" />
        </div>
      </div>

      <div className="vr-case-two">
        <h1>vr立体地理图景课程</h1>
        <Carousel arrows={true} effect="fade">
          <div className="container">
            <img src="images/vr/7.jpg" alt="" />
          </div>
          <div className="container">
            <img src="images/vr/10.jpg" alt="" />
          </div>
          <div className="container">
            <img src="images/vr/11.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
