import Navbar from "../container/Navbar";
import Users from "../container/Users";
import SideBar from "../container/sidebar";
import { Route, Routes } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="h-screen flex">
      <SideBar />

      <div
        className="flex flex-col  w-full"
        style={{ backgroundColor: "#E5E5E5" }}
      >
        <Navbar />
        <div className="h-full overflow-y-scroll">
          <Routes>
            <Route element={<Users />} path="/" />
          </Routes>
        </div>
      </div>

      {/* <div className="hidden md:flex h-screen flex-initial">
        <div></div>
      </div> */}
    </div>
  );
};

export default HomePage;
