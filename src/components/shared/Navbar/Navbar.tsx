import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import Cart from "./Cart/Cart";
import useAuth from "../../../hooks/useAuth";
import UserProfile from "./UserProfile/UserProfile";
import Links from "./Links/Links";
import ResponsiveLinks from "./ResponsiveLinks/ResponsiveLinks";
import Logo from "./../Logo/Logo";
import SearchProduct from "./SearchProduct/SearchProduct";
import Checkout from "./../Checkout/Checkout";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { user, isToggle } = useAuth();

  return (
    <>
      <nav className={`py-3.5 shadow-sm bg-white z-50 sticky top-0`}>
        <div className="container flex justify-between mx-auto px-4 items-center">
          <div className="md:hidden text-xl mt-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="flex items-center gap-7">
            <Logo />
            <Links />
          </div>
          <div className="lg:w-96 md:flex hidden">
            <SearchProduct />
          </div>

          <div className="flex items-center gap-6">
            {user ? (
              <>
                <Cart />
                <UserProfile />
              </>
            ) : (
              <Link to={"/login"}>
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>

        {/* for responsive menu */}
        {isMenuOpen && <ResponsiveLinks setIsMenuOpen={setIsMenuOpen} />}
      </nav>
      {isToggle && <Checkout />}
    </>
  );
};

export default Navbar;
