import React from "react";
import CustomDropDown from "../commons/CustomDropdown";
import logo from "../../assets/images/logo.svg";
import { customersData, buisnessData, settingsData } from "../../utils/data";
import TitleIcon from "../commons/TitleIcon";

const SideBar: React.FC = () => {
  return (
    <div className="relative bg-white shadow-sm pb-10 hidden md:block p-10 h-full ">
      <img
        src={logo}
        className="h-5 md:h-8 mb-24 mr-4 lg:mr-36 my-3 md:py-0 flex flex-1/2"
      />
      <div className="flex w-48 flex-row items-center justify-between mb-8">
        <img src={"/icons/briefcase.svg"} />
        <CustomDropDown title="Switch Organization" />
      </div>

      <div className="mb-2">
        <TitleIcon
          name="dashboard"
          image={import("../../assets/images/icons/home.svg")}
        />
      </div>

      <div className=" w-48  overflow-y-scroll " style={{ height: "60%" }}>
        <p
          style={{ color: "rgba(33, 63, 125, 1)" }}
          className=" text-sm uppercase mt-5 mb-2"
        >
          Customers
        </p>
        {customersData.map((item) => (
          <TitleIcon name={item.name} image={item.image} />
        ))}

        <p
          style={{ color: "rgba(33, 63, 125, 1)" }}
          className=" text-sm uppercase mt-6 mb-2"
        >
          buisnesses
        </p>
        {buisnessData.map((item) => (
          <TitleIcon name={item.name} image={item.image} />
        ))}

        <p
          style={{ color: "rgba(33, 63, 125, 1)" }}
          className=" text-sm uppercase mt-6 mb-2"
        >
          settings
        </p>
        {settingsData.map((item) => (
          <TitleIcon name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
