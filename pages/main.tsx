import React from "react";
import LandingLayout from "../components/LandingLayout/LandingLayout";
import Section from "../components/Section/SectionContainer";
import ListView from "../components/ListView/ListViewContainer";

const Main = () => {
  return (
    <div>
      <LandingLayout />
      <Section />
      <ListView />
    </div>
  );
};

export default Main;
