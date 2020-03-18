import { connect } from "react-redux";
import SectionItem from "./SectionInterfaces";
import Section from "./Section";

const sectionItem: SectionItem = {
  keyTitle: "headerIncorporation",
  keyDescription: "incorporationDescription",
  keyButtonTitle: "letStart",
  imagePath: "assets/images/incorporation/incorporation.png"
};

export const sectionIncorporationReducer = (
  state: SectionItem = sectionItem
) => {
  return state;
};

const mapStateToProps = (state: any) => ({
  sectionItem: state.sectionIncorporationReducer
});

export default connect(mapStateToProps)(Section);
