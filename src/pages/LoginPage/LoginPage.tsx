import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useScrollToTop from "../../hooks/useScrollToTop";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { LuEye, LuEyeOff } from "react-icons/lu";

function LoginPage() {
  useScrollToTop();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosInstance = useAxios();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { logOutUser } = useAuth();
  const [isShow, setIsShow] = useState<boolean>(false);

  const onSubmit = async (data: any): Promise<void> => {
    setIsLoading(true);
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-2">
      <div className="bg-white p-8 rounded shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="mobile">
              Email
            </label>
            <input
              type="email"
              placeholder="Type your email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary-color"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>

          <div className="mb-6 relative">
            <label className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type={isShow ? "text" : "password"}
              placeholder="Type your password"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-primary-color"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
            <div
              className="absolute right-4 top-11 cursor-pointer"
              onClick={() => setIsShow(!isShow)}
            >
              {isShow ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none"
          >
            {isLoading ? "Login..." : "Login"}
          </button>
        </form>

        <div className="mt-4 text-center text-gray-600">
          Have not registered yet?
          <Link
            to="/registration"
            className="text-gray-800 hover:text-gray-600 underline ml-1"
          >
            Please Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
