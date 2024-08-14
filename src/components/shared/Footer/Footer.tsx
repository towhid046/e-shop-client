import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

const socialIcons = [
  {
    id: 2005,
    link: "https://www.linkedin.com/in/towhid-morol",
    icon: <FaLinkedin />,
  },
  { id: 2006, link: "https://github.com/towhid046", icon: <FaGithub /> },
  {
    id: 2007,
    link: "https://www.facebook.com/tawhid.05",
    icon: <FaFacebookSquare />,
  },
  { id: 2008, link: "mailto:towhidmorol46@gmail.com", icon: <IoMdMail /> },
];
export default function Footer() {
  return (
    <>
      <footer className="py-4 text-gray-400 bg-gray-800">
        <div className="container mx-auto px-4 flex items-center justify-between gap-3 flex-col md:flex-row">
          <ul className=" flex gap-4 items-center">
            {socialIcons.map((item) => (
              <Link key={item.id} to={item.link} target="_blank">
                <li className="transition duration-300 hover:text-primary-color cursor-pointer text-xl">
                  {item.icon}
                </li>
              </Link>
            ))}
          </ul>
          <div className=" flex gap-5 items-center ">
            <p>
              All Right Reserver - {new Date().getFullYear()} &copy;{" "}
              <Link
                target="_blank"
                to="https://towhidmorol.vercel.app"
                className=" hover:text-blue-300 duration-200 transition"
              >
                Towhid Morol
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
