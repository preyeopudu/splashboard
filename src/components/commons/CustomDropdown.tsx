import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
const CustomDropDown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  //   const handleOptionClick = (option) => {
  //     setSelectedOption(option);
  //     setIsExpanded(false);
  //     onSelect(option);
  //   };
  return (
    <div>
      <div className="flex-row flex items-center ">
        <span style={{ marginRight: 10 }}>Opudu</span>

        <AiOutlineCaretDown />
      </div>
    </div>
  );
};

export default CustomDropDown;
