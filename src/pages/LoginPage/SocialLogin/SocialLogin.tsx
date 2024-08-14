import useAuth from "../../../hooks/useAuth";
import googleLogo from "../../../assets/images/google-logo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { logInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handelLogInWithGoogle = async () => {
    try {
      await logInWithGoogle();
      toast.success("Login Success!!", {
        position: "top-center",
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-3">
      <h2 className="py-2 text-center text-xl font-semibold italic">Or</h2>
      <div className="flex justify-center gap-5 mb-3 ">
        <button
          onClick={handelLogInWithGoogle}
          className="btn flex items-center gap-2  w-full "
        >
          <img className="w-5" src={googleLogo} alt="Google" />
          <span>Continue With Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
