import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  FireOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "./App.scss";
import logo from "./images/youtube.png";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <div>
      <Layout>
        <Header
          className="header"
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" className="">
              <img src={logo} alt="Logo youtube" />
              Youtube Vanced
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            padding: "0 50px",
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider
              className="site-layout-background"
              width={200}
              style={{
                padding: "20px 0",
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <Menu.Item key="sub1" icon={<HomeOutlined />}>
                  Home
                </Menu.Item>
                <Menu.Item key="1">Music</Menu.Item>
                <Menu.Item key="2">Game</Menu.Item>
                <Menu.Item key="3">Programing</Menu.Item>
                <Menu.Item key="4">League of Legend</Menu.Item>
                <Menu.Item key="sub2" icon={<FireOutlined />}>
                  Trending
                </Menu.Item>
                <Menu.Item key="5">Music</Menu.Item>
                <Menu.Item key="6">Gaming</Menu.Item>
                <Menu.Item key="7">Movies</Menu.Item>
                <Menu.Item key="8">News</Menu.Item>
                <Menu.Item key="sub3" icon={<MenuUnfoldOutlined />}>
                  Subscriptions
                </Menu.Item>
                <Menu.Item key="5">Music</Menu.Item>
                <Menu.Item key="6">Gaming</Menu.Item>
                <Menu.Item key="7">Movies</Menu.Item>
                <Menu.Item key="8">News</Menu.Item>
                <Menu.Item key="sub3" icon={<MenuUnfoldOutlined />}>
                  Subscriptions
                </Menu.Item>
              </Menu>
            </Sider>
            <Content
              style={{ padding: "0 24px", minHeight: 280 }}
              className="site-layout-content-background"
            ></Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Youtube clone ver2021 Created by Neo
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
