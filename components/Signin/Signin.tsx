import Link from "next/link";
import { withTranslation } from "../../i18n";
import { Field } from "redux-form";
import EmailTextField from "../../components/FieldComponents/EmailTextField";
import SubmitSignin from '../../Validated/SigninValidator/SubmitSignin';
import PasswordTextField from "../../components/FieldComponents/PasswordTextField";
import ButtonSubmit from "../../components/FieldComponents/ButtonSubmit";

const Signin = ({ handleSubmit, signinPresenter, t }: any) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <img
            className="img-responsive w-100"
            src={signinPresenter.signinItem.keyimagePath}
            alt="image signin"
          />
        </div>
        <div className="col-lg-6 col-8">
          <h2 className="text-center mb-3">
            {t(signinPresenter.keySigninHeader)}
          </h2>
          <form  onSubmit={handleSubmit(SubmitSignin)}>
            <div className="messages"></div>
            <div className="form-group">
              <label>
                {t(signinPresenter.signinItem.keySigninLabelUsername)}
              </label>
              <Field
                name="email"
                type="email"
                component={EmailTextField}
                styleTextError="text-danger"
                label={t(
                  signinPresenter.signinItem.keySigninPlaceholderUsername
                )}
              />
            </div>
            <div className="form-group">
              <label>
                {t(signinPresenter.signinItem.keySigninLabelPassword)}
              </label>
              <Field 
                name="password"
                type="password"
                styleTextError="text-danger"
                component={PasswordTextField}
                label={t(signinPresenter.signinItem.keySigninPlaceholderPassword)}/>
            </div>
            <div className="form-group mt-4 mb-5">
              <div className="remember-checkbox d-flex flex-wrap align-items-center justify-content-between">
                <div className="checkbox">
                  <input type="checkbox" id="check2" name="check2" />
                  <label className="pl-1" htmlFor="check2">
                    {t(signinPresenter.signinItem.keyRemember)}
                  </label>
                </div>
                <a href="#">
                  {t(signinPresenter.signinItem.keyForgotPassword)}
                </a>
              </div>
            </div>{" "}
            <Field 
                name="submit"
                type="submit"
                style="btn btn-primary btn-block"
                component={ButtonSubmit}
                label={t(signinPresenter.signinItem.keySigninSubmit)}/>
          </form>
          <div className="d-flex align-items-center flex-wrap text-center justify-content-center mt-4">
            <span className="text-muted mr-1">
              {t(signinPresenter.signinItem.keySignupAccount)}
            </span>
            <Link href="/signup">
              {t(signinPresenter.signinItem.keySignupButton)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation("common")(Signin);
