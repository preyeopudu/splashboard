import { BsArrowLeft } from "react-icons/bs";

const UserDetailsPage = () => {
  return (
    <div className="h-full p-10">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-x-3 mb-4">
          <BsArrowLeft size={30} color={"rgba(84, 95, 125, 1)"} />
          <p className="text-base hidden md:block">Back to Users</p>
        </div>
        <div className="flex gap-y-3  flex-col md:flex-row  md:items-center justify-between w-full">
          <p
            className=" text-lg md:text-2xl font-bold  md:text-left"
            style={{ color: "rgba(33, 63, 125, 1)" }}
          >
            User Details
          </p>
          <div className="flex flex-col md:flex-row items-center gap-y-3">
            <button className=" px-3 border-button-red border rounded-lg w-full md:w-auto h-10 md:mb-0 md:mr-4 text-button-red font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
              Blacklist User
            </button>
            <button className=" px-3 border-button-blue border rounded-lg w-full md:w-auto h-10 text-button-blue font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
              Activate User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
