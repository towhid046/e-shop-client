import { NavLink } from "react-router-dom";
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
];
const Links = () => {
  return (
    <ul className="md:flex hidden items-center lg:gap-3 gap-2">
      {navLinks.map((link) => (
        <NavLink key={link.path} to={link.path}>
          <li
            className={`flex items-center text-gray-600 lg:gap-2 gap-1.5 duration-300 transition hover:text-primary-color `}
          >
            <span></span>
            <span>{link.label}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Links;
