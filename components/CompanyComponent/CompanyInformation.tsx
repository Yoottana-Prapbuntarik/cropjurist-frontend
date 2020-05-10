import { withTranslation } from '../../i18n';
import { Field } from 'redux-form';
import TextField from '../../components/FieldComponents/TextField';
import CheckBox from '../../components/FieldComponents/CheckBox';
import ButtonSubmit from '../../components/FieldComponents/ButtonSubmit';
import SelectField from '../../components/FieldComponents/SelectField';
import { LabelCompanyName, LabelAddress, LabelAddressDropdown } from "./CompanyInformationInterface";
import './styles.scss';

const CompanyInformation = ({ companyInformationPresenter, submitCompanyInformation, handleSubmit, t }: any) => {
    return (
        <div className="row justify-content-center">
            <div className="col-12 mb-2">
                {t(companyInformationPresenter.keyTitleCompany)}
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit(submitCompanyInformation)}>
                {companyInformationPresenter.labelCompanyName.map(
                    (item: LabelCompanyName, index: number) => {
                        return (
                            <div className="col-12" key={index}>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-12">
                                            <Field
                                                name={item.keyCompanyName}
                                                type="text"
                                                component={TextField}
                                                styleTextError="text-danger"
                                                className="form-control"
                                                label={t(item.keyCompanyName)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
                <div className="col-12">
                    {t(companyInformationPresenter.keyTitleAddress)}
                    <div className="underline"></div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="row">
                            {companyInformationPresenter.labelAddress.map(
                                (item: LabelAddress, index: number) => {
                                    return (
                                        <div className="col-md-6 col-12" key={index}>
                                            <label>
                                                {t(item.keyLabelName)}
                                            </label>
                                            <div key={index}>
                                                <Field
                                                    name={item.keyLabelName}
                                                    type="text"
                                                    component={TextField}
                                                    styleTextError="text-danger"
                                                    className="form-control"
                                                    label={t(item.keyLabelName)}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}

                            {companyInformationPresenter.labelAddressDropdown.map(
                                (item: LabelAddressDropdown, index: number) => {
                                    return (
                                        <div className="col-md-6 col-12" key={index}>
                                            {t(item.keyLabelNameDropdown)}
                                            <Field
                                                style="form-control"
                                                name={item.keyLabelNameDropdown} key={index} component={SelectField}
                                                styleTextError="text-danger"
                                            >
                                                {item.optionSelect.map(optionSelect => {
                                                    return (
                                                        <option value={optionSelect.optionValue}>
                                                            {optionSelect.optionSelctName}
                                                        </option>
                                                    )
                                                })}
                                            </Field>
                                        </div>
                                    )
                                }
                            )}
                            <div className="col-12">
                                <div className="checkbox">
                                    <Field type="checkbox" name={companyInformationPresenter.labelCheckbox.keyCheckboxAddress} component={CheckBox} />
                                    <label className="pl-1">
                                        {t(companyInformationPresenter.labelCheckbox.keyCheckboxAddress)}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    {t(companyInformationPresenter.keyTitleAuditor)}
                    <div className="underline"></div>
                </div>
                <div className="col-12">
                    <label>
                        {t(companyInformationPresenter.labelAuditor.keyLicense)}
                    </label>
                    <Field
                        name={companyInformationPresenter.labelAuditor.keyLicense}
                        type="text"
                        component={TextField}
                        styleTextError="text-danger"
                        className="form-control"
                        label={t(companyInformationPresenter.labelAuditor.keyLicense)}
                    />
                </div>
                <div className="col-12">
                    <label>
                        {t(companyInformationPresenter.labelAuditor.keyAuditorName)}
                    </label>
                    <Field
                        name={companyInformationPresenter.labelAuditor.keyAuditorName}
                        type="text"
                        component={TextField}
                        styleTextError="text-danger"
                        className="form-control"
                        label={t(companyInformationPresenter.labelAuditor.keyAuditorName)}
                    />
                </div>
                <div className="col-12">
                    <div className="checkbox">
                        <Field type="checkbox" name={companyInformationPresenter.labelCheckbox.keyCheckboxAuditor} component={CheckBox} />
                        <label className="pl-1">
                            {t(companyInformationPresenter.labelCheckbox.keyCheckboxAuditor)}
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12"></div>
                    <div className="col-md-6 col-12 text-right pt-4 pr-5">
                        <Field
                            name="submit"
                            type="submit"
                            style="btn btn-primary w-50"
                            styleTextError="text-danger"
                            component={ButtonSubmit}
                            label={t(companyInformationPresenter.keySubmit)}
                        />
                    </div>
                </div>
            </form>
        </div >
    )
}

export default withTranslation('common')(CompanyInformation);