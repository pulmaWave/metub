import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "./App.scss";
import logo from "./images/youtube.png";
import Contents from "./components/homepage/Contents";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
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
          style={{
            paddingTop: "60px",
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo" />
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
            <Menu.Item key="8">Settings</Menu.Item>
            <Menu.Item key="8">Report</Menu.Item>
            <Menu.Item key="8">History</Menu.Item>
            <Menu.Item key="8">Help</Menu.Item>
            <Menu.Item key="8">Send feedback</Menu.Item>
            <Menu.Item key="8">Live</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
              <Contents />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Bryan
          </Footer>
        </Layout>
      </Layout>
      ,
    </div>
  );
};

export default App;
