import Navbar from "../container/Navbar";
import SideBar from "../container/sidebar";
const HomePage = () => {
  return (
    <div className="h-screen flex">
      <SideBar />

      <div className="flex bg-red-300 w-full">
        <Navbar />
      </div>

      {/* <div className="hidden md:flex h-screen flex-initial">
        <div></div>
      </div> */}
    </div>
  );
};

export default HomePage;
