import heroImg from "../../../assets/images/hero-img.png";
import React from "react";
import Button from "../../shared/Button/Button";
import { Link } from "react-router-dom";
const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-5xl mx-auto min-h-screen px-4 items-center gap-5 py-8 ">
      <div className="flex-1 md:text-left text-center">
        <div className="max-w-xl">
          <h2 className="lg:text-4xl text-3xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary-color  to-gray-300 inline-block text-transparent bg-clip-text">
              {" "}
              E-Shop!
            </span> 
          </h2>
            <span className="font-medium text-2xl text-gray-400">Choose your devices</span>
          <p className="text-gray-600 my-7">
            This is a electronics shopping application in this application you
            can find amazing electronics products such as Mobile Phone, Laptop,
            Camera, PC and so on...{" "}
          </p>
          <Link to="/products">
            <Button>Products</Button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <figure className="flex md:flex-row-reverse">
          <img
            src={heroImg}
            className="min-w-full rounded-full"
            alt="Hero banner image"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
