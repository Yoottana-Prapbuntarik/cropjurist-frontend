import { withTranslation } from "../../i18n";
import { Field, reduxForm } from "redux-form";
import { MenuItem, SocialItem } from "./FooterViewInterfaces";

import "./styles.scss";

const Footer = ({ footerItem, t }: any) => {
  return (
    <footer
      className="py-5 bg-primary position-relative"
      data-bg-img="assets/images/landing/footer_background.png"
    >
      <div className="shape-1 footer-container">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="footer-graphics"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            className="footer-graphics-path"
          ></path>
        </svg>
      </div>
      <div className="container mt-11">
        <div className="row">
          <div className="col-12 col-lg-5 col-xl-4 mr-auto mb-6 mb-lg-0">
            <div className="subscribe-form bg-warning-soft p-5 rounded">
              <h5 className="mb-4 text-white">
                {t(footerItem.subscribeItem.keySubScribeTitle)}
              </h5>
              <h6 className="text-light">
                {t(footerItem.subscribeItem.keySubScribeDescription)}
              </h6>
              <form id="mc-form" className="group">
                <Field
                  name="email"
                  type="email"
                  component={emailField}
                  label={t(footerItem.subscribeItem.keyEmail)}
                />
                <Field
                  name="subscribe"
                  type="submit"
                  component={submitButton}
                  label={t(footerItem.subscribeItem.keySubmitButton)}
                />
              </form>
              <small className="text-light">
                {t(footerItem.subscribeItem.keySubDescriptionForSubScribe)}
              </small>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row">
              <div className="col-12 col-sm-4 navbar-dark">
                <h5 className="mb-4 text-white">
                  {t(footerItem.menu.keyHeaderTitle)}
                </h5>
                <ul className="navbar-nav list-unstyled mb-0">
                  {footerItem.menu.footerMenuItems.map(
                    (item: MenuItem, index: number) => (
                      <li
                        className="mb-3 nav-item"
                        key={`footer-view-item-${index}`}
                      >
                        {t(item.keyTitle)}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="row mt-5">
                Corp<span className="font-weight-bold">Jurist</span>
              </div>
              <div className="col-12 col-sm-6 mt-6 mt-sm-0">
                <ul className="list-inline mb-0">
                  {footerItem.socialItems.map(
                    (item: SocialItem, index: number) => (
                      <li
                        className="list-inline-item"
                        key={`social-view-item-${index}`}
                      >
                        <i className={"la " + item.name}></i>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-white text-center mt-8">
          <div className="col">
            <hr className="mb-9" />
            Copyright 2019 Bootsland Theme by
            <u>
              <a className="text-white" href="#">
                CorpJurist
              </a>
            </u>
            | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

const emailField = ({ input, label, type }: any) => {
  return (
    <input
      {...input}
      placeholder={label}
      type={type}
      name="email"
      className="email form-control email-subscribe-height"
      id="mc-email"
      required=""
    />
  );
};

const submitButton = ({ input, label, type }: any) => {
  return (
    <input
      {...input}
      className="btn btn-outline-light btn-block mt-3 mb-2"
      type={type}
      name="subscribe"
      value={label}
    />
  );
};

export default withTranslation("common")(
  reduxForm({
    form: "FooterForm"
  })(Footer)
);
