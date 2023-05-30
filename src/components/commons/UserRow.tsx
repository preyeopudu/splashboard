// @ts-nocheck
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const UserRow = ({ user }) => {
  const navigate = useNavigate();

  const currentDate = new Date();
  const lastActiveDate = new Date(user.lastActiveDate);
  const inactiveDays = Math.floor(
    (currentDate - lastActiveDate) / (1000 * 60 * 60 * 24)
  );

  let statusColor = "";
  let textColor = "";
  let statusText = "";

  if (inactiveDays <= 60) {
    statusColor = "rgba(57, 205, 98, 0.1)";
    textColor = "rgba(57, 205, 98, 1)";
    statusText = "Active";
  } else if (inactiveDays <= 20) {
    statusColor = "rgba(84, 95, 125, 0.1)";
    textColor = "rgba(84, 95, 125, 1)";
    statusText = "Inactive";
  } else {
    statusColor = "rgba(84, 95, 125, 0.1)";
    textColor = "rgba(84, 95, 125, 1)";
    statusText = "Blacklisted";
  }

  return (
    <tr key={user?.id}>
      <td className="px-6 py-4 whitespace-nowrap">{user?.orgName}</td>
      <td className="px-1 py-4 whitespace-nowrap">{user?.userName}</td>
      <td className="px-1 py-4 whitespace-nowrap">{user?.email}</td>
      <td className="px-1 py-4 whitespace-nowrap">{user?.phoneNumber}</td>
      <td className="px-1 py-4 whitespace-nowrap">
        {new Date(user?.createdAt).toDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-row items-center justify-between">
          <p
            style={{ backgroundColor: statusColor, color: textColor }}
            className="s px-10 text-sm text-center py-3 rounded-full"
          >
            {statusText}
          </p>
          <BsThreeDotsVertical />
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
