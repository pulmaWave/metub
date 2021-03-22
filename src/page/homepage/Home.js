import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import View from "../views/View";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "./Home.scss";
import picture2 from "../../assets/images/somepic.jpg"
import logo from "../../assets/images/youtube.png";
import something from "../../assets/images/something.JPG";
import Video from "../../components/videos/Video";
const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
  const [collapsed, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapsed);
  };
  return (
    <div>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <img src={logo} alt="logo"></img>
              Youtube advanced
            </Menu.Item>
          </Menu>
        </Header>
        <Sider
          trigger={null}
          collapsible
          collapsed={setCollapse}
          style={{
            paddingTop: "60px",
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo">
            {/* {(setCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle(),
            })} */}
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
          
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Trending
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Subscriptions
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              Gaming
            </Menu.Item>
            <Menu.Item key="5">Music</Menu.Item>
            <Menu.Item key="6">League of Legends</Menu.Item>
            <Menu.Item key="7">Movies</Menu.Item>
            <Menu.Item key="9">Settings</Menu.Item>
            <Menu.Item key="10">Report</Menu.Item>
            <Menu.Item key="11">History</Menu.Item>
            <Menu.Item key="12">Help</Menu.Item>
            <Menu.Item key="13">Send feedback</Menu.Item>
            <Menu.Item key="14">Live</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <Router>
                {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/" exact="true">
                    <Video
                      name="The Chainsmockers & Coldplay - Somthing just like this (Lyric)"
                      src={picture2}
                    />
                  </Route>
                  <Route path="/home" exact="true">
                    <Video
                      name="The Chainsmockers & Coldplay - Somthing just like this (Lyric)"
                      src={picture2}
                    />
                  </Route>
                  <Route path="/video" exact="true">
                    <View />
                  </Route>
                </Switch>
              </Router>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Bryan
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
