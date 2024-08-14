import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { toast } from "react-toastify";
import { NavigateFunction, useNavigate } from "react-router-dom";

const UserProfile: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const { user, logOutUser } = useAuth();
  const handleLogoutUser: () => Promise<void> = async () => {
    try {
      await logOutUser();
      navigate("/");
      toast.success("Logout Success!!", {
        position: "top-center",
      });
    } catch (err: unknown) {
      console.error(err);
    }
  };
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="border-2 rounded-full hover:border-gray-300 transition duration-300"
      >
        <div>
          <img alt="User Img "  className="md:w-9 w-8 md:h-9 h-8 rounded-full" src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-4 w-52 p-2 shadow"
      >
        <li className="text-base p-2">Hi, {user?.displayName}</li>
        <li>
          <button>Profile</button>
        </li>
        <li>
          <button>Settings</button>
        </li>
        <li>
          <button onClick={handleLogoutUser}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
