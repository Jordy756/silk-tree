import { Header } from "@shared/components/layout/Header.tsx";
// import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import "./index.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
