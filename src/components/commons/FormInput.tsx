import React, { useState } from "react";

interface FormInputProps {
  placeholder?: string;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({ placeholder, type }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="p-3 my-10 rounded-s-md bg-white w-full border border-1 border-rgba(84, 95, 125, 0.15) flex">
      <div className="flex flex-1 w-full">
        <input
          className="w-9/12 outline-none py-1"
          type={isVisible ? "text" : type}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="w-3/12 text-sm"
            style={{ color: "#39CDCC" }}
          >
            {isVisible === true ? "hide" : "show"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
