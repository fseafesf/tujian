import React from "react";
import { Carousel } from "antd";
import "./About.scss";

export default function About() {
  return (
    <>
      <div className="about-header">
        <div className="about-introduction">
          <h1 className="introduction-title">团队简介</h1>
          <p>
            云禾途见团队致力打造4—18岁青少年群体的自然研学和VR线上研学相结合的系列项目，目的是开拓产教融合的线上、
            线下双生态自然研学市场，提升青少年自然核心素养能力。同时响应国家政策与号召，助力研学发展，通过产教融合，将教学资源整合，
            实现精品研学项目打造。
          </p>
          <img src="images/inbg.jpg" alt="" />
        </div>
        <div className="about-honor">
          <img src="images/honor.png" alt="" />
        </div>
      </div>
      <div className="about-case">
        <h1>一些案例</h1>
        <Carousel arrows={true} effect="fade">
          <div className="container">
            <img src="images/example/1.png" alt="" />
          </div>
          <div className="container">
            <img src="images/example/2.png" alt="" />
          </div>
          <div className="container">
            <img src="images/example/3.png" alt="" />
          </div>
          <div className="container">
            <img src="images/example/4.png" alt="" />
          </div>
          <div className="container">
            <img src="images/example/5.png" alt="" />
          </div>
        </Carousel>
      </div>
      <div className="about-teacher">
        <h1>部分指导老师介绍</h1>
        <img src="images/teacher.png" alt="" />
      </div>
    </>
  );
}
