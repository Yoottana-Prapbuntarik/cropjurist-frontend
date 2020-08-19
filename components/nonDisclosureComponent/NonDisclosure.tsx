import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import Textarea from '../FieldComponents/Textarea'
import { Field } from 'redux-form'
import SelectField from '../FieldComponents/SelectField'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import { useEffect } from 'react'
import './styles.scss'
import Router from 'next/router'
import { useDispatch } from 'react-redux'
enum StatusCode {
  success = 200
}
const NonDisclosure = ({
  nonDisclosurePresenter,
  handleSubmit,
  handldSubmitForm,
  handleChangeDisclosureNameI,
  handleChangeDisclosureNameII,
  handleChangeDisclosureAddressI,
  handleChangeDisclosureAddressII,
  handleChangeDate,
  handleChangeScopeOfDiscussion,
  handleChangeEndDate,
  handleChangePeriodOfSecret,
  handleChangeArbitrationJurisdiction,
  handleChangeChoiceOfLaw,
  handleChangeNameOfSigningCompanyI,
  handleChangeNameOfSigningCompanyII,
  handleChangetitleAndCapacityOfSigningCompanyI,
  handleChangetitleAndCapacityOfSigningCompanyII,
  handldUpdateSubmitForm,
  getNonDisclosureAPIClient,
  t
}: any) => {
  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(getNonDisclosureAPIClient)
    if (!localStorage.getItem('access-token')) {
      alert(t(nonDisclosurePresenter.keyPleaseSignin))
      Router.replace('/signin')
    }
  }, [])
  return (
    <div className="row">
      {console.log('nonDisclosurePresenter', nonDisclosurePresenter)}
      <form className="w-100" onSubmit={nonDisclosurePresenter.keyStatueAPI === StatusCode.success ? handleSubmit(handldUpdateSubmitForm) : handleSubmit(handldSubmitForm)}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="col-12 mb-2">
              {t(nonDisclosurePresenter.addressNonDisclosureI)}
              <div className="underline"></div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <div className="row">
                  <div className="col-lg-6 col-12 mt-2 mb-2">
                    <label>
                      {t(nonDisclosurePresenter.disclosureNameI.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.disclosureNameI.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.disclosureNameI.name)}
                      currentValue={nonDisclosurePresenter.disclosureNameI.valueName}
                      onChange={(event: any) => handleChangeDisclosureNameI(event.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-2 mb-2">
                    <label>
                      {t(nonDisclosurePresenter.addressI.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.addressI.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.addressI.name)}
                      currentValue={nonDisclosurePresenter.addressI.valueAddress}
                      onChange={(event: any) => handleChangeDisclosureAddressI(event.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-2">
                    <label>
                      {t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.nameOfSigningCompanyI.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}
                      currentValue={nonDisclosurePresenter.nameOfSigningCompanyI.valueNameOfSigning}
                      onChange={(event: any) => handleChangeNameOfSigningCompanyI(event.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-2">
                    <label>
                      {t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}
                      currentValue={nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.valueTitleAndCapacityOfSigning}
                      onChange={(event: any) => handleChangetitleAndCapacityOfSigningCompanyI(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              {t(nonDisclosurePresenter.addressNonDisclosureII)}
              <div className="underline"></div>
            </div>
            <div className="col-12" >
              <div className="form-group">
                <div className="row">
                  <div className="col-lg-6 col-12 mt-2 mb-2">
                    <label>
                      {t(nonDisclosurePresenter.disclosureNameI.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.disclosureNameII.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.disclosureNameI.name)}
                      currentValue={nonDisclosurePresenter.disclosureNameII.valueName}
                      onChange={(event: any) => handleChangeDisclosureNameII(event.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-2 mb-2">
                    <label>
                      {t(nonDisclosurePresenter.addressI.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.addressII.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.addressI.name)}
                      currentValue={nonDisclosurePresenter.addressII.valueAddress}
                      onChange={(event: any) => handleChangeDisclosureAddressII(event.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-2 mb-2">
                    <label>
                      {t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.nameOfSigningCompanyII.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.nameOfSigningCompanyI.name)}
                      currentValue={nonDisclosurePresenter.nameOfSigningCompanyII.valueNameOfSigning}
                      onChange={(event: any) => handleChangeNameOfSigningCompanyII(event.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-2 mb-2">
                    <label>
                      {t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.titleAndCapacityOfSigningCompanyII.name}
                      type="text"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.name)}
                      currentValue={nonDisclosurePresenter.titleAndCapacityOfSigningCompanyII.valueTitleAndCapacityOfSigning}
                      onChange={(event: any) => handleChangetitleAndCapacityOfSigningCompanyII(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 mt-4">
            <div className="col-12">
              <div className="underline"></div>
            </div>
            <div className="col-12" >
              <div className="form-group">
                <div className="row">
                  <div className="col-12 mt-2 mb-2">
                    <label>
                      {t(nonDisclosurePresenter.scopeOfDiscussion.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.scopeOfDiscussion.name}
                      type="text"
                      component={Textarea}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.scopeOfDiscussion.name)}
                      currentValue={nonDisclosurePresenter.scopeOfDiscussion.valueScopeDiscussion}
                      onChange={(event: any) => handleChangeScopeOfDiscussion(event.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-2 mb-2">
                    <label>{t(nonDisclosurePresenter.date.name)}</label>
                    <Field
                      name={nonDisclosurePresenter.date.name}
                      type="date"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.date.name)}
                      currentValue={nonDisclosurePresenter.date.valueDate}
                      onChange={(event: any) => handleChangeDate(event.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-2 mb-2">
                    <label>{t(nonDisclosurePresenter.endDate.name)}</label>
                    <Field
                      name={nonDisclosurePresenter.endDate.name}
                      type="date"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.endDate.name)}
                      currentValue={nonDisclosurePresenter.endDate.valueDate}
                      onChange={(event: any) => handleChangeEndDate(event.target.value)}
                    />
                  </div>
                  <div className="col-lg-4 col-12 mt-2 mb-2">
                    <Field
                      disabledState={false}
                      label={t(nonDisclosurePresenter.arbitrationJurisdiction.name)}
                      name={nonDisclosurePresenter.arbitrationJurisdiction.name}
                      style="form-control"
                      value={nonDisclosurePresenter.arbitrationJurisdiction.valueArbitrationJurisdiction}
                      component={SelectField}
                      styleTextError="text-danger"
                      onChange={(event: any) => handleChangeArbitrationJurisdiction(event.target.value)}
                    >
                      <option value={1}>
                        {t('ภาษีมูลค่าเพิ่ม')}
                      </option>
                      <option value={2}>
                        {t('ภาษีอื่นๆ ')}
                      </option>
                    </Field>
                  </div>
                  <div className="col-lg-4 col-12 mt-2 mb-2">
                    <Field
                      label={t(nonDisclosurePresenter.choiceOfLaw.name)}
                      disabledState={false}
                      style="form-control"
                      name={nonDisclosurePresenter.choiceOfLaw.name}
                      value={nonDisclosurePresenter.choiceOfLaw.valueChoiceOfLaw}
                      component={SelectField}
                      styleTextError="text-danger"
                      onChange={(event: any) => handleChangeChoiceOfLaw(event.target.value)}
                    >
                      <option value={1}>
                        {t('ภาษีมูลค่าเพิ่ม')}
                      </option>
                      <option value={2}>
                        {t('ภาษีอื่นๆ ')}
                      </option>
                    </Field>
                  </div>
                  <div className="col-lg-4 col-12 mt-2 mb-2">
                    <label>
                      {t(nonDisclosurePresenter.periodOfSecret.name)}
                    </label>
                    <Field
                      name={nonDisclosurePresenter.periodOfSecret.name}
                      type="number"
                      component={CustomeTextField}
                      styleTextError="text-danger"
                      className="form-control"
                      label={t(nonDisclosurePresenter.periodOfSecret.name)}
                      currentValue={nonDisclosurePresenter.periodOfSecret.valuePeriodOfSecret}
                      onChange={(event: any) => handleChangePeriodOfSecret(event.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-end mt-3">
                      <Field
                        name={nonDisclosurePresenter.buttonSubmit}
                        type="submit"
                        style="btn btn-primary w-50"
                        styleTextError="text-danger"
                        component={ButtonSubmit}
                        label={t(nonDisclosurePresenter.buttonSubmit)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default withTranslation('common')(NonDisclosure)
