import { withTranslation } from '../../i18n';
import { Field } from 'redux-form';
import TextField from '../FieldComponents/TextField';
import ButtonSubmit from '../FieldComponents/ButtonSubmit';

const ChangePassword = ({ handleSubmit, changePassword, changePasswordPresenter, t }: any) => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <img className="w-100" src={changePasswordPresenter.keyImagePath} alt="image change password page" />
                </div>
                <div className="col-lg-6 col-12 my-5">
                    <h3 className="mb-5">{t(changePasswordPresenter.keyTitleChangePassword)}</h3>
                    <form onSubmit={handleSubmit(changePassword)}>
                        <div className="form-group">
                            <label>{t(changePasswordPresenter.keyNewPassword)}</label>
                            <Field
                                name="password"
                                type="password"
                                styleTextError="text-danger"
                                component={TextField}
                                className="form-control"
                                label={t(changePasswordPresenter.keyNewPassword)}
                            />
                        </div>
                        <div className="form-group">
                            <label>{t(changePasswordPresenter.keyConfirmNewPassword)}</label>
                            <Field
                                name="confirmPassword"
                                type="password"
                                styleTextError="text-danger"
                                component={TextField}
                                className="form-control"
                                label={t(changePasswordPresenter.keyConfirmNewPassword)}
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                type="submit"
                                name="submit"
                                component={ButtonSubmit}
                                style="btn btn-primary"
                                label={t(changePasswordPresenter.keySubmitResetPassword)}
                                styleTextError="text-danger"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withTranslation('common')(ChangePassword);