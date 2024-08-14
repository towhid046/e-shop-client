interface ResponsiveLinksProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";

const navLinks = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/products", label: "Products", icon: AiOutlineProduct },
];

const ResponsiveLinks = ({ setIsMenuOpen }: ResponsiveLinksProps) => {
  return (
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
  );
};

export default ResponsiveLinks;
