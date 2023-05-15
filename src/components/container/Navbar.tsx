import logo from "../../assets/images/logo.svg";
import pic from "../../assets/images/pic.jpg";
import { Link } from "react-router-dom";
import { RxBell } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import CustomDropDown from "../commons/CustomDropdown";
import SearchBar from "../commons/SearchBar";

const Navbar = () => {
  return (
    <div className="w-full bg-white py-4  px-4 lg:px-16 ">
      <div className=" md:py-8 lg:items-center items-baseline justify-between flex flex-row ">
        <div className="lg:hidden" onClick={() => alert(1)}>
          <HiMenu size={33} />
        </div>
        <div
          className="md:flex-row flex-3/2  justify-center flex md:items-center md:justify-between 
      "
        >
          <img
            src={logo}
            className="h-5 md:h-8 mr-4 lg:mr-36 my-3 md:py-0 flex flex-1/2"
          />
          <div className="hidden md:flex">
            <SearchBar />
          </div>
        </div>
        <div className="lg:flex flex-row items-center justify-between gap-3 ml-2 lg:gap-6 hidden">
          <Link to="/">
            <p className="underline ">Docs</p>
          </Link>
          <div>
            <RxBell size={22} color="rgba(33, 63, 125, 1)" />
          </div>

          <img src={pic} className="w-10 h-10 rounded-full" />
          <CustomDropDown />
        </div>
      </div>
      <div className="flex md:hidden mt-3">
        <SearchBar className="" />
      </div>
    </div>
  );
};

export default Navbar;
