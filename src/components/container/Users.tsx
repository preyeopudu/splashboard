import UserBox from "../commons/UserBox";

const Users = () => {
  return (
    <div className=" h-full">
      <div className="p-10">
        <p className=" text-2xl font-bold" style={{ color: "#213F7D" }}>
          Users
        </p>

        <div className=" mt-10 grid md:grid-cols-2 md:gap-4 lg:grid-cols-4   w-full lg:gap-x-10   grid-cols-1 gap-y-6">
          <UserBox title="users" number="2453" image="/icons/activeusers.svg" />
          <UserBox
            title="active users"
            number="2453"
            image="/icons/users.svg"
          />
          <UserBox
            title="users with loans"
            number="2453"
            image="/icons/loan.svg"
          />
          <UserBox
            title="users with savings"
            number="2453"
            image="/icons/usersaving.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
