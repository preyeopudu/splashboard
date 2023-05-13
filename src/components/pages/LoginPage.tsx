import login from "../../assets/images/signin.svg";
import logo from "../../assets/images/logo.svg";
import FormInput from "../commons/FormInput";
import { Link } from "react-router-dom";
import FormButton from "../commons/FormButton";
const LoginPage = () => {
  return (
    <div className="flex h-screen bg-white flex-col m-10">
      <div className="bg-white h-16 flex">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className="flex flex-col md:flex-row bg-white flex-1">
        <div className=" hidden sm:flex w-full h-full md:w-1/2">
          <img
            alt="sign up"
            className="h-500 w-full object-contain"
            src={login}
          />
        </div>
        <div className="w-full shadow-xl h-full md:w-1/2 flex items-center justify-center">
          <div className="h-500 w-9/12 h-96 ">
            <h1
              className="text-some-blue text-2xl md:text-3xl lg:text-5xl"
              style={{ fontWeight: 700 }}
            >
              Welcome !
            </h1>
            <p className="my-3" style={{ color: "#545F7D" }}>
              Enter details to login.
            </p>

            <FormInput placeholder="Email" />

            <FormInput placeholder="Password" type="password" />
            <Link to="/">
              <p
                className="text-xs"
                style={{ textTransform: "uppercase", color: " #39CDCC" }}
              >
                Forgotten Password?
              </p>
            </Link>

            <FormButton label="Log In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
