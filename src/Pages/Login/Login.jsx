import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import SweetAlertMessage from "../Shared/SweetAlertMessage";

const Login = () => {
  const [lgDisabled, setLgDisabled] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(4, "black", "white", "numbers");
  }, []);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (user_captcha_value.length !== 0) {
      if (validateCaptcha(user_captcha_value, false)) {
        setLgDisabled(false);
        setErrMsg("");
      } else {
        setLgDisabled(true);
        setErrMsg("Captcha Does Not Match");
      }
    } else {
      setErrMsg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    if (email.length > 0 || password > 0) {
      setErrMsg("");
      console.log(email, password);
      SweetAlertMessage({title: "Connecting To Server" , lastTitle: "Login Successfully"})
    } else {
      SweetAlertMessage({title: "Connecting To Server",icon:"error" ,lastTitle: "Oops..!!", text:"Something went Wrong !"})
      setErrMsg("Email & Password Field Must Be Filled");
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                ref={passwordRef}
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onChangeCapture={handleValidateCaptcha}
                ref={captchaRef}
                type="number"
                placeholder="write the captcha above"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={lgDisabled}
                onClick={handleSubmit}
                type="submit"
                value="Login"
                className="btn btn-accent text-white uppercase font-bold"
              />
            </div>
            {errMsg && (
              <p className="text-red-500 ml-5 duration-1000 delay-700 font-semibold">
                {errMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
