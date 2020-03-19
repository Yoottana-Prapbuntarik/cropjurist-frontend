import Link from "next/link";
import { withTranslation } from "../../i18n";

const Signin = ({ signinPresenter, t }: any) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5">
          <h2 className="text-center mb-3">
            {t(signinPresenter.keySigninHeader)}
          </h2>
          <form id="contact-form" method="post">
            <div className="messages"></div>
            <div className="form-group">
              <label>
                {t(signinPresenter.subscribeItem.signinLabelUsername)}
              </label>
              <input
                type="text"
                className="form-control"
                placeholder={t(
                  signinPresenter.subscribeItem.signinPlaceholderUsername
                )}
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <label>
                {t(signinPresenter.subscribeItem.signinLabelPassword)}
              </label>
              <input
                type="password"
                className="form-control"
                placeholder={t(
                  signinPresenter.subscribeItem.signinPlaceholderPassword
                )}
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group mt-4 mb-5">
              <div className="remember-checkbox d-flex align-items-center justify-content-between">
                <div className="checkbox">
                  <input type="checkbox" id="check2" name="check2" />
                  <label htmlFor="check2">
                    {t(signinPresenter.subscribeItem.signinRemember)}
                  </label>
                </div>
                <a href="#">{t(signinPresenter.subscribeItem.signinForgot)}</a>
              </div>
            </div>{" "}
            <button type="submit" className="btn btn-primary btn-block">
              {t(signinPresenter.subscribeItem.signinSubmit)}
            </button>
          </form>
          <div className="d-flex align-items-center text-center justify-content-center mt-4">
            <span className="text-muted mr-1">
              {t(signinPresenter.subscribeItem.signupAccount)}
            </span>
            <Link href="/singup">
              {t(signinPresenter.subscribeItem.signup)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation("common")(Signin);
