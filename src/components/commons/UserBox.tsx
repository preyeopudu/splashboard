import React from "react";

interface UserBoxProps {
  title: string;
  image: string;
  number: string;
}
const UserBox: React.FC<UserBoxProps> = ({ title, number, image }) => {
  return (
    <div className="  shadow h-40 bg-white rounded-md col-span-1 p-6 justify-center flex flex-col">
      <div className="">
        <img src={image} alt="User icon" />
        <p
          className="uppercase my-2 font-medium "
          style={{ color: "rgba(84, 95, 125, 1)" }}
        >
          {title}
        </p>
        <p>2,453</p>
      </div>
    </div>
  );
};

export default UserBox;
