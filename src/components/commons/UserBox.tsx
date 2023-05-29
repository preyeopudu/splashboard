import React from "react";

interface UserBoxProps {
  title: string;
  image: string;
  amount: number;
}
const UserBox: React.FC<UserBoxProps> = ({ title, image, amount }) => {
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
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default UserBox;
