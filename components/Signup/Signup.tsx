import Link from "next/link";
import { withTranslation } from "../../i18n";

const Signup = ({ signupPresenter, t }: any) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img className="img-responsive w-100" src={signupPresenter.signupItemInputform.keyimagePath} alt="image signup"/>
          </div>
        <div className="col-lg-6 col-md-10 ml-auto mr-auto">
          <h2 className="mt-3 mb-3 text-center">
            {t(signupPresenter.keySignupHeader)}
          </h2>
          <div className="register-form text-center">
            <form>
              <div className="messages"></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder={t(
                        signupPresenter.signupItemInputform
                          .keyPlaceholderFirstNameSignup
                      )}
                      data-error="Firstname is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder={t(
                        signupPresenter.signupItemInputform
                          .keyPlaceholderLastNameSignup
                      )}
                      data-error="Lastname is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder={t(
                        signupPresenter.signupItemInputform
                          .keyPlaceholderEmailSignup
                      )}
                      data-error="Valid email is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="re-enter-email"
                      className="form-control"
                      placeholder={t(
                        signupPresenter.signupItemInputform
                          .keyPlaceholderReEnterEmailSignup
                      )}
                      data-error="Valid email is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder={t(
                        signupPresenter.signupItemInputform
                          .keyPlaceholderPasswordSignup
                      )}
                      data-error="password is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder={t(
                        signupPresenter.signupItemInputform
                          .keyPlaceholderConfirmPasswordSignup
                      )}
                      data-error="Conform Password is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <a href="#" className="btn btn-primary">
                    {t(signupPresenter.signupItemInputform.keySubmitSignup)}
                  </a>
                  <span className="mt-4 d-block">
                    {t(signupPresenter.signupItemInputform.keyHaveAccount)}{" "}
                    <Link href="/signin">
                      {t(signupPresenter.signupItemInputform.keySigninAccount)}
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation("common")(Signup);
