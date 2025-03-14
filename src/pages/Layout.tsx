import { Outlet } from "react-router-dom";

import { Footer } from "../components/Footer";
import "./../styles/layout.scss";
import Header from "../components/header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
