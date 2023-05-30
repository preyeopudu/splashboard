/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import { useEffect, useState } from "react";
import UserBox from "../commons/UserBox";
import UserRow from "../commons/UserRow";
import { GetUsers } from "../../api/user";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const usersPerPage = 14;
  const totalPages = Math.ceil(userList?.length / usersPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = userList.slice(startIndex, endIndex);
  const totalUsers = userList.length;

  // Total number of users with loans
  const usersWithLoans = userList.filter(
    (user) => user.education && user.education.loanRepayment
  ).length;

  // Total number of users with savings
  const usersWithSavings = userList.filter(
    (user) => user.accountBalance > 0
  ).length;

  // Total number of active users (based on lastActiveDate)
  const currentDate = new Date();
  const activeUsers = userList.filter((user) => {
    const lastActiveDate = new Date(user.lastActiveDate);
    const inactiveDays = Math.floor(
      (currentDate - lastActiveDate) / (1000 * 60 * 60 * 24)
    );
    return inactiveDays <= 30; // Assuming active users are those who have been active within the last 30 days
  }).length;
  const fetchUsers = async () => {
    const res = await GetUsers();
    setUserList(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="h-full max-w-full">
      <div className="p-10">
        <p className="text-2xl font-bold" style={{ color: "#213F7D" }}>
          Users
        </p>

        {/* User statistics */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UserBox
            title="users"
            amount={totalUsers}
            image="/icons/activeusers.svg"
          />
          <UserBox
            title="active users"
            amount={activeUsers}
            image="/icons/users.svg"
          />
          <UserBox
            title="users with loans"
            amount={usersWithLoans}
            image="/icons/loan.svg"
          />
          <UserBox
            title="users with savings"
            amount={usersWithSavings}
            image="/icons/usersaving.svg"
          />
          {/* UserBox components */}
        </div>

        {/* User table */}
        <div className=" mt-10 overflow-y-auto overflow-x-auto ">
          <table className="w-full divide-y-reverse divide-gray-200">
            <thead className="bg-white py-10 pt-14">
              <tr>
                <th className="py-5 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organization
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Joined
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <thead className="bg-white py-10 pt-14">
              {/* Table header rows */}
            </thead>

            {/* Table body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {currentUsers?.map((user) => (
                <UserRow user={user} key={Math.random()} />
              ))}
            </tbody>
          </table>
        </div>

        {
          <div className="flex justify-center mt-5">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`${"bg-gray-200"} hover:bg-slate-500 hover:text-white py-2 px-4 mx-1 rounded text-slate-600`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Users;
