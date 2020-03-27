import React from "react";
import LandingLayout from "../components/LandingLayout/LandingLayout";
import Signin from "../components/Signin/SigninContainer";

const SigninPage = () => {
  return (
    <LandingLayout>
      <div className="min-vh-100">
        <Signin />
      </div>
    </LandingLayout>
  );
};
export default SigninPage;
