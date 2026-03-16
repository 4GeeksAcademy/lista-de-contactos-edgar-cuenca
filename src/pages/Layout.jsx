//Layout.jsx

import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <ScrollToTop>
      <Navbar />
      <div className="container-fluid min-vh-100">
         <Outlet />
      </div>
      <Footer />
    </ScrollToTop>
  );
};