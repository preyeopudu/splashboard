import React, { useState } from "react";

interface FormButtonProps {
  label?: string;
}

const FormButton: React.FC<FormButtonProps> = ({ label = "click" }) => {
  return (
    <button
      className="w-full text-white py-3 rounded-md my-5 font-bold"
      style={{ backgroundColor: "rgba(57, 205, 204, 1)" }}
    >
      {label}
    </button>
  );
};

export default FormButton;
