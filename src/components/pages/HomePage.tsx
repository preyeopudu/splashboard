import Navbar from "../container/Navbar";
import SideBar from "../container/sidebar";
const HomePage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="hidden md:flex h-screen flex-initial">
        <SideBar />
      </div>
    </div>
  );
};

export default HomePage;
