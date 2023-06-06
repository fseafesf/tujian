import React, { useState, useEffect } from "react";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const items = [
  {
    label: (
      <Link to="/about">
        <span>途见概况</span>
      </Link>
    ),
    key: "/about",
    icon: <MailOutlined />,
  },
  {
    label: (
      <Link to="/culture">
        <span>途见文化</span>
      </Link>
    ),
    key: "/culture",
    icon: <MailOutlined />,
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
    ],
  },
  {
    label: (
      <Link to="/course">
        <span>研学课程</span>
      </Link>
    ),
    key: "/course",
    icon: <SettingOutlined></SettingOutlined>,
  },
  {
    label: (
      <Link to="/vr">
        <span>VR双生态研学模式</span>
      </Link>
    ),
    key: "/vr",
    icon: <SettingOutlined></SettingOutlined>,
  },
];

export default function Index() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);
  useEffect(() => {
    const { pathname } = location;
    setSelectedKeys(pathname);
  }, [location]);
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img className="logo" src="logo.jpg" alt="" />
          <span>做青少年素质教育的引领者</span>
        </div>
        <div className="header-nav">
          <Menu mode="horizontal" selectedKeys={selectedKeys} items={items} />;
        </div>
      </div>
    </>
  );
}
