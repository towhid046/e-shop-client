import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import useScrollToTop from "../../hooks/useScrollToTop";
import useToGetImgUrl from "../../hooks/useToGetImgUrl";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import useAuth from "../../hooks/useAuth";

interface OnsubmitProps {
  name: string;
  img: FileList | File[];
  email: string;
  password: string;
}

function RegistrationPage() {
  useScrollToTop();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const { createNewUser, updateUserProfile } = useAuth();
  const getImageUrl = useToGetImgUrl();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const onSubmit = async (data: OnsubmitProps): Promise<void> => {
    setIsLoading(true);
    try {
      const image = await getImageUrl(data.img);
      await createNewUser(data.email, data.password);
      await updateUserProfile(data.name, image);
      toast.success("Register Success!!", {
        position: "top-center",
      });
      navigate("/products");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-2">
      <div className="bg-white p-8 rounded shadow-2xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Register
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              required
              id="name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary-color"
            />
            {errors.name && (
              <small className="text-red-500">Name is required</small>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              required
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary-color"
            />
            {errors.email && (
              <small className="text-red-500">Valid email is required</small>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Photo Url</label>
            <input
              type="file"
              {...register("img", {
                required: true,
              })}
              required
              placeholder="Photo Url"
              className="w-full px-3 py-1.5 cursor-pointer border rounded focus:outline-none focus:border-primary-color"
            />
            {errors.img && (
              <small className="text-red-500">Photo Url is required</small>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={isShow ? "text" : "password"}
              required
              placeholder="Create password"
              {...register("password", {
                required: true,
              })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary-color"
            />
            <div
              className="absolute right-4 top-11 cursor-pointer"
              onClick={() => setIsShow(!isShow)}
            >
              {isShow ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-gray-600">
          Already registered? Please
          <Link
            to="/login"
            className="text-secondary-color italic  hover:text-primary-color underline ml-1"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
