import Link from 'next/link'
import { withTranslation } from '../../i18n'
import { Field } from 'redux-form'
import TextField from '../../components/FieldComponents/TextField'
import ButtonSubmit from '../../components/FieldComponents/ButtonSubmit'
import CheckBox from '../../components/FieldComponents/CheckBox'

const Signin = ({ handleSubmit, signinPresenter, submitSignin, t }: any) => {
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
          <h2 className="text-center mb-3">{t(signinPresenter.keySigninHeader)}</h2>
          <form onSubmit={handleSubmit(submitSignin)}>
            <div className="messages" />
            <div className="form-group">
              <label>{t(signinPresenter.signinItem.keySigninLabelUsername)}</label>
              <Field
                name="email"
                type="email"
                component={TextField}
                styleTextError="text-danger"
                className="email form-control email-subscribe-height"
                label={t(signinPresenter.signinItem.keySigninPlaceholderUsername)}
              />
            </div>
            <div className="form-group">
              <label>{t(signinPresenter.signinItem.keySigninLabelPassword)}</label>
              <Field
                name="password"
                type="password"
                styleTextError="text-danger"
                component={TextField}
                className="form-control"
                label={t(signinPresenter.signinItem.keySigninPlaceholderPassword)}
              />
            </div>
            <div className="form-group mt-4 mb-5">
              <div className="remember-checkbox d-flex flex-wrap align-items-center justify-content-between">
                <div className="checkbox">
                  <Field type="checkbox" name="checkbox" component={CheckBox} />
                  <label className="pl-1" htmlFor="checkbox">
                    {t(signinPresenter.signinItem.keyRemember)}
                  </label>
                </div>
                <Link href="/forgotpassword">{t(signinPresenter.signinItem.keyForgotPassword)}</Link>
              </div>
            </div>{' '}
            <Field
              name="submit"
              type="submit"
              style="btn btn-primary btn-block"
              component={ButtonSubmit}
              label={t(signinPresenter.signinItem.keySigninSubmit)}
            />
          </form>
          <div className="d-flex align-items-center flex-wrap text-center justify-content-center mt-4">
            <span className="text-muted mr-1">{t(signinPresenter.signinItem.keySignupAccount)}</span>
            <Link href="/signup">{t(signinPresenter.signinItem.keySignupButton)}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(Signin)
