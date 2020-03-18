import { connect } from "react-redux";
import SectionItem from "./SectionInterfaces";
import Section from "./Section";

const sectionItem: SectionItem = {
  keyTitle: "sectionTitle",
  keyDescription: "description",
  keyButtonTitle: "joinus",
  imagePath: "assets/images/landing/smartphone.png"
};

export const sectionReducer = (state: SectionItem = sectionItem) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  sectionItem: state.sectionReducer
});

export default connect(mapStateToProps)(Section);
