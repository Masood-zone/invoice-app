import React, { useEffect } from "react";
import { signupImage } from "../../assets/images";
import { SIGNUP_INFO } from "./data";
import Form from "../../components/form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../appRedux/slice/admin/adminFxn";
import { reset } from "../../appRedux/slice/admin/adminSlice";
import { toast } from "react-toastify";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error } = useSelector((state) => state.admins);

  const onSubmit = (data) => {
    const signupData = {
      name: data.name,
      email: data.email,
      phoneNumber: data.number,
      streetAddress: data.address,
      postCode: data.postCode,
      city: data.city,
      country: data.country,
      password: data.password,
    };
    dispatch(register(signupData));
    console.log(signupData);
  };

  useEffect(() => {
    if (!loading && success) {
      toast.success("User created!");
      navigate("/login");
      dispatch(reset());
    }
    if (error) {
      toast.error(error);
      dispatch(reset());
    }
  }, [loading, success, error, navigate, dispatch]);

  return (
    <div className="w-screen h-screen flex flex-row-reverse items-start overflow-hidden">
      {/* Signup Image */}
      <div className="flex-shrink-0 w-[70%] h-full max-lg:hidden">
        <img src={signupImage} alt="signup-logo" className="w-full h-full" />
      </div>
      {/* Form Content */}
      <div className="w-[30%] flex flex-col items-center h-full py-5 bg-slate-100 m-0 scale- max-xl:scale-63 max-lg:w-full max-lg:h-full overflow-y-scroll">
        <h1 className="text-4xl font-semibold py-2">Sign In</h1>
        <p className="text-xl italic">Let's get you started!</p>
        {/* Form */}
        <Form Data={SIGNUP_INFO} submitHandler={onSubmit} />
      </div>
    </div>
  );
}

export default Signup;
