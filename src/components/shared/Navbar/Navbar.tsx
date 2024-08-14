import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaHome, FaChalkboardTeacher, FaInfoCircle } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import Button from "../Button/Button";
import Cart from "./Cart/Cart";
import { Link, NavigateFunction, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const navLinks = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/products", label: "Products", icon: AiOutlineProduct },
  { path: "/contact", label: "Contact", icon: FaChalkboardTeacher },
  { path: "/about_us", label: "About Us", icon: FaInfoCircle },
];
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { user, logOutUser } = useAuth();

  const navigate: NavigateFunction = useNavigate();
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
    <nav className={`py-3.5 shadow-sm bg-white z-50 sticky top-0`}>
      <div className="container flex justify-between mx-auto px-4 items-center">
        <div className="md:hidden text-xl mt-2">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div>
          <Link to={"/"}>
            {" "}
            <h2 className="md:text-3xl text-2xl font-bold">E_shop</h2>
          </Link>
        </div>
        <ul className="md:flex hidden items-center lg:gap-8 gap-5">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              <li
                className={`flex items-center lg:gap-2 gap-1.5 duration-300 transition hover:text-primary-color `}
              >
                <span>
                  <link.icon />
                </span>
                <span>{link.label}</span>
              </li>
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          {user ? (
            <>
              <Cart />
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-circle avatar"
                >
                  <div className="md:w-10 w-9 rounded-full">
                    <img alt="User Img" src={user?.img} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-4 w-52 p-2 shadow"
                >
                  <li className="text-base p-2">Hi, {user?.name}</li>
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
            </>
          ) : (
            <Link to={"/login"}>
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>

      {/* for responsive menu */}
      {isMenuOpen && (
        <ul className="absolute md:hidden top-16 left-0 w-full bg-base-200 justify-center items-center flex h-[90vh] flex-col gap-3 p-6">
          {navLinks.map((link) => (
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              key={link.path}
              to={link.path}
            >
              <li className="flex items-center lg:gap-2 gap-1.5 hover:text-primary-color duration-300 transition">
                <span>
                  <link.icon />
                </span>
                <span>{link.label}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
