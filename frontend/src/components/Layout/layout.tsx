import { Outlet } from "react-router-dom";
import Header from '../Header';
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;