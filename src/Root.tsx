import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
