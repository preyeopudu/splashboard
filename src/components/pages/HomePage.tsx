import Navbar from "../container/Navbar";
import Users from "../container/Users";
import { Link, Route, Routes } from "react-router-dom";
import SideBar from "../container/sidebar";
import UserDetailsPage from "../container/UserDetails";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const HomePage = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <div className="  h-screen max-h-screen bg-black flex flex-row">
      <div className="max-h-screen h-screen  hidden md:block">
        <SideBar />
      </div>

      {/* Toggle sidebar div */}
      <div
        className={`fixed w-2/3 h-full z-50 bg-white transition-transform duration-300   ${
          toggleSideBar ? " translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className="absolute w-full flex justify-end items-center p-2 mt-8">
          <AiFillCloseCircle
            fontSize={30}
            className="cursor-pointer"
            onClick={() => setToggleSideBar(false)}
          />
        </div>

        <SideBar />
      </div>
      <div
        className="flex flex-col  w-full h-full"
        style={{ backgroundColor: "#E5E5E5" }}
      >
        <Navbar setToggleSideBar={setToggleSideBar} />

        <div className="h-full overflow-y-scroll">
          <Routes>
            <Route element={<UserDetailsPage />} path="/users/:id" />
            <Route element={<Users />} path="/" />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
