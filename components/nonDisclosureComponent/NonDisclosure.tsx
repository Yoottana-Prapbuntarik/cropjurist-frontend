import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { Field } from 'redux-form'
import SelectField from '../FieldComponents/SelectField'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import { useEffect } from 'react'
import './styles.scss'
import Router from 'next/router'

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
  handleChangePartyI,
  handleChangePartyII,
  t
}: any) => {
  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      alert(t(nonDisclosurePresenter.keyPleaseSignin))
      Router.push('/signin')
    }
  }, [])

  return (
    <div className="row">
      <form className="w-100" onSubmit={handleSubmit(handldSubmitForm)}>
        <div className="col-12 mb-2">
          {t(nonDisclosurePresenter.addressNonDisclosureI)}
          <div className="underline"></div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <div className="row">
              <div className="col-lg-6 col-12">
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
              <div className="col-lg-6 col-12">
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
              <div className="col-lg-6 col-12">
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
                  currentValue={nonDisclosurePresenter.nameOfSigningCompanyI.valueNameOfSigning1}
                  onChange={(event: any) => handleChangeNameOfSigningCompanyI(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
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
                  currentValue={nonDisclosurePresenter.titleAndCapacityOfSigningCompanyI.valueTitleAndCapacityOfSigning1}
                  onChange={(event: any) => handleChangetitleAndCapacityOfSigningCompanyI(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.partyI.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.partyI.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.partyI.name)}
                  currentValue={nonDisclosurePresenter.partyI.valueParty}
                  onChange={(event: any) => handleChangePartyI(event.target.value)}
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
              <div className="col-lg-6 col-12">
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
              <div className="col-lg-6 col-12">
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
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.nameOfSigningCompanyII.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.nameOfSigningCompanyII.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.nameOfSigningCompanyII.name)}
                  currentValue={nonDisclosurePresenter.nameOfSigningCompanyII.valueNameOfSigning1}
                  onChange={(event: any) => handleChangeNameOfSigningCompanyII(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyII.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.titleAndCapacityOfSigningCompanyII.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.titleAndCapacityOfSigningCompanyII.name)}
                  currentValue={nonDisclosurePresenter.titleAndCapacityOfSigningCompanyII.valueTitleAndCapacityOfSigning1}
                  onChange={(event: any) => handleChangetitleAndCapacityOfSigningCompanyII(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.partyII.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.partyII.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.partyII.name)}
                  currentValue={nonDisclosurePresenter.partyII.valueParty}
                  onChange={(event: any) => handleChangePartyII(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="underline"></div>
        </div>
        <div className="col-12" >
          <div className="form-group">
            <div className="row">
              <div className="col-12">
                <label>
                  {t(nonDisclosurePresenter.scopeOfDiscussion.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.scopeOfDiscussion.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.scopeOfDiscussion.name)}
                  currentValue={nonDisclosurePresenter.scopeOfDiscussion.valueScopeDiscussion}
                  onChange={(event: any) => handleChangeScopeOfDiscussion(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
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
              <div className="col-lg-6 col-12">
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
              <div className="col-lg-6 col-12">
                <Field
                  disabledState={false}
                  label = {t(nonDisclosurePresenter.arbitrationJurisdiction.name)}
                  name={nonDisclosurePresenter.arbitrationJurisdiction.name}
                  style="form-control"
                  value={nonDisclosurePresenter.arbitrationJurisdiction.valueArbitrationJurisdiction}
                  component={SelectField}
                  styleTextError="text-danger"
                  onChange={(event: any) => handleChangeArbitrationJurisdiction(event.target.value)}
                >
                  <option value={1}>
                    {t('ภาษีรายเดือน')}
                  </option>
                  <option value={2}>
                    {t('ภาษีรายปี')}
                  </option>
                </Field>
              </div>
              <div className="col-lg-6 col-12">
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
                    {t('ภาษีรายเดือน')}
                  </option>
                  <option value={2}>
                    {t('ภาษีรายปี')}
                  </option>
                </Field>
              </div>
              <div className="col-12">
                <label>
                  {t(nonDisclosurePresenter.periodOfSecret.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.periodOfSecret.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.periodOfSecret.name)}
                  currentValue={nonDisclosurePresenter.periodOfSecret.valuePeriodOfSecret}
                  onChange={(event: any) => handleChangePeriodOfSecret(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12"></div>
          <div className="col-md-6 col-12 text-right my-3 pt-4 pr-5">
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
      </form>
    </div>
  )
}

export default withTranslation('common')(NonDisclosure)
