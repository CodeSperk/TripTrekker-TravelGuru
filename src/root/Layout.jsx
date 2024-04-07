import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
const Layout = () => {
  return (
    <>
    <div className="max-w-[1440px] mx-auto px-3 md:px-12 lg:px-16 2xl:px-32">
        <Navbar></Navbar>
    </div>
        <Outlet></Outlet>
    </>
  );
};

export default Layout;