import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface CustomDropDownProps {
  title?: string;
}
const CustomDropDown: React.FC<CustomDropDownProps> = ({ title }) => {
  //   const handleOptionClick = (option) => {
  //     setSelectedOption(option);
  //     setIsExpanded(false);
  //     onSelect(option);
  //   };
  return (
    <div>
      <div className="flex-row flex items-center ">
        <span style={{ marginRight: 10 }}>{title}</span>

        <BsChevronDown />
      </div>
    </div>
  );
};

export default CustomDropDown;
