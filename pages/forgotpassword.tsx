import React from "react";
import ForgotPasswordContainer from "../components/ForgotPassword/ForgotPasswordContainer";
import LandingLayout from "../components/LandingLayout/LandingLayout";

const forgotPassword = () => {
  return (
    <LandingLayout>
      <div className="min-vh-100">
        <ForgotPasswordContainer />
      </div>
    </LandingLayout>
  );
};
export default forgotPassword;