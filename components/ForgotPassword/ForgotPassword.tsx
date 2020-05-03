import Link from "next/link";
import { withTranslation } from "../../i18n";
import { Field } from "redux-form";
import TextField from '../FieldComponents/TextField';
import ButtonSubmit from '../FieldComponents/ButtonSubmit';

const ForgotPassword = ({handleSubmit ,submitResetPassword , forgotPassworPresenter, t }: any) => {
  return (
    <div className="container mt-5">
        <div className="row">
      <div className="col-md-6 col-12">
		<img className="img-responsive w-100"
		     src={forgotPassworPresenter.keyImagePath} alt="image signin"/>  
        </div>
      <div className="col-md-6 col-12 mt-5">
            <div>
              <div className="text-center ">
                <h2 className="pt-2">{t(forgotPassworPresenter.keyHeader)}</h2>
                <p>{t(forgotPassworPresenter.keyEmail)}</p>
              </div>
              <form onSubmit={handleSubmit(submitResetPassword)}>
                <div className="messages"></div>
                <div className="form-group">
                  <label>{t(forgotPassworPresenter.keyEmail)}</label>
                  <Field
                    name="email"
                    type="email"
                    component={TextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(forgotPassworPresenter.keyEmail)}
                  />
                </div>
                <Field
                  name="submit"
                  type="submit"
                  style="btn btn-primary btn-block w-100"
                  component={ButtonSubmit}
                  label={t(forgotPassworPresenter.keyButtonName)}
                  />
              </form>
              <div className="mt-4 text-center">
                <Link href="/signin">{t(forgotPassworPresenter.keyBackToLogin)}</Link>
              </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default withTranslation("common")(ForgotPassword);