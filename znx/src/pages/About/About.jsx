import React from "react";
import { Carousel } from "antd";
import "./About.scss";
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function About() {
  return (
    <>
      <div className="about-header">
        <div className="about-introduction">
          <h1 className="introduction-title">团队简介</h1>
          <p>
            云禾途见创业团队是一只由优秀本科生及硕士研究生组成，以响应国家“少年中国行”号召、聚焦青少年核心
            素养培养为目标的年轻创业团队，致力于为 4-18
            岁中国青少人群及其家长、老师、学校提供研学导师、研学课程、
            研学活动、研学基地、研学周边商品等服务。
            团队已与金色假日旅行社、华荣天香基地、湖北巴东金丝猴国家级自然保护区、神农架自然保护区、木林子国
            家自然保护区、专业科考团队建立长期战略合作伙伴关系，以“研有所思、学有所获、旅有所感、行有所成”为培
            养目标，配备专业的博士生导师、生态学、植物学博士、硕士研究生所组成的研学导师团队，以小、初、高中课本
            为蓝本，为武汉市中小学生提供个性化、定制化、系统化的研学旅游服务。我们以“独立有主见、博学爱探索”为
            导向，鼓励学生基于自身兴趣，在老师指导下，从自然、社会和生活中选择和确定研究专题，主动获取知识、应用
            知识、解决问题，致力于把我们打造为以自然研学教育产品为核心的多元化团队。
          </p>
          <img src="/inbg.jpg" alt="" />
        </div>
        <div className="about-honor">
          <img src="/honor.png" alt="" />
        </div>
      </div>
      <div className="about-case">
        <h1>一些案例</h1>
        <Carousel arrows={true} effect="fade">
          <div className="container">
            <img src="example/1.png" alt="" />
          </div>
          <div className="container">
            <img src="example/2.png" alt="" />
          </div>
          <div className="container">
            <img src="example/3.png" alt="" />
          </div>
          <div className="container">
            <img src="example/4.png" alt="" />
          </div>
          <div className="container">
            <img src="example/5.png" alt="" />
          </div>
        </Carousel>
      </div>
      <div className="about-teacher">
        <h1>部分指导老师介绍</h1>
        <img src="teacher.png" alt="" />
      </div>
    </>
  );
}
