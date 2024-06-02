import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
