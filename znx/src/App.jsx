import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routers";
import { Layout } from "antd";
import Header from "./layout/Header/index";
import "./styles/App.css";

const { Footer, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  flex: 1,
  color: "#fff",
  backgroundColor: "#deebf7",
  padding: " 3rem 10%",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#60ab6a",
};

function App() {
  const views = useRoutes(routes);
  return (
    <>
      <Header></Header>
      <Content style={contentStyle}>{views}</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </>
  );
}

export default App;
