import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import View from "../views/View";
import { Layout, Menu } from "antd";
import {
  // MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "./Home.scss";
import MeoThumbnail from "../../assets/videos/MeoThumbnail.PNG";
import memepic1 from "../../assets/videos/memepic1.PNG";
import catVideo2 from "../../assets/videos/Meo.mp4";
import meme1 from "../../assets/videos/meme.mp4";
import logo from "../../assets/images/youtube.png";
import Video from "../../components/videos/Video";
const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
  const [collapsed, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapsed);
  };
  return (
    <div>
      <Router>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item
                key="1"
                icon={<MenuFoldOutlined />}
                onClick={() => toggle()}
              ></Menu.Item>
              <Menu.Item key="2">
                <img src={logo} alt="logo"></img>
                <a
                  href="https://www.youtube.com/"
                  target="blank"
                  rel="referrer"
                >
                  Youtube advanced
                </a>
              </Menu.Item>
            </Menu>
          </Header>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              paddingTop: "60px",
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/cat">Cat</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/meme">Meme</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                <Link to="/fact">Fact</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<BarChartOutlined />}>
                <Link to="/english">English</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/" exact="true">
                  <Video
                    path="/video1"
                    name="The cat was surprised by its owner"
                    author="Bryan"
                    src={MeoThumbnail}
                  />
                  <Video
                    path="/video2"
                    name="This meme made my day"
                    author="Bryan"
                    src={memepic1}
                  />
                  <Video
                    path="/video2"
                    name="This meme made my day"
                    author="Bryan"
                    src={memepic1}
                  />
                  <Video
                    path="/video2"
                    name="This meme made my day"
                    author="Bryan"
                    src={memepic1}
                  />
                </Route>
                <Route path="/home" exact="true">
                  <Video
                    path="/video1"
                    name="The cat was surprised by its owner"
                    author="Bryan"
                    src={MeoThumbnail}
                  />

                  <Video
                    path="/video2"
                    name="This meme made my day"
                    author="Bryan"
                    src={memepic1}
                  />
                  <Video
                    path="/video2"
                    name="This meme made my day"
                    author="Bryan"
                    src={memepic1}
                  />
                  <Video
                    path="/video2"
                    name="This meme made my day"
                    author="Bryan"
                    src={memepic1}
                  />
                </Route>
                <Route path="/cat" exact="true">
                  <Video
                    path="/video1"
                    name="The cat was surprised by its owner"
                    author="Bryan"
                    src={MeoThumbnail}
                  />
                </Route>
                <Route path="/meme">
                  <Video
                    path="/video2"
                    name="This meme made my day"
                    author="Bryan"
                    src={memepic1}
                  />
                </Route>
                <Route path="/fact" exact="true"></Route>
                <Route path="/english" exact="true"></Route>
                <Route path="/video" exact="true">
                  <View src={catVideo2} />
                </Route>
                <Route path="/video1" exact="true">
                  <View src={catVideo2} />
                </Route>
                <Route path="/video2" exact="true">
                  <View src={meme1} />
                </Route>
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Bryan
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default Home;
