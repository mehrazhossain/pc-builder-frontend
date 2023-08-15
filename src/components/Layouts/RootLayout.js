import { Layout, theme } from "antd";
const { Content, Footer } = Layout;
import Header from "../Header/Header";

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="min-h-screen md:py-6 max-w-5xl lg:max-w-6xl mx-auto p-4 md:px-6">
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        PC Builder ©2023 Created by Mehraz
      </Footer>
    </Layout>
  );
};

export default RootLayout;
