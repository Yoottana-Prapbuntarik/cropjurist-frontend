import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { Field } from 'redux-form'
import SelectField from '../FieldComponents/SelectField'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import './styles.scss'

const NonDisclosure = ({
  nonDisclosurePresenter,
  handleSubmit,
  handleChangeDisclosureNameI,
  handleChangeDisclosureNameII,
  handleChangeDisclosureAddressNumberI,
  handleChangeDisclosureAddressNumberII,
  handleChangeDisclosureRoadI,
  handleChangeDisclosureRoadII,
  handleChangeDisclosureReferenceI,
  handleChangeDisclosureReferenceII,
  showAllProvinces,
  showAllProvincesII,
  formSelectProvinces,
  formSelectDistrict,
  formSelectSubDistrict,
  formSelectZipcode,
  formSelectProvincesII,
  formSelectDistrictII,
  formSelectSubDistrictII,
  formSelectZipcodeII,
  handldSubmitForm,
  handleChangeDate,
  handleChangeScopeOfDiscussion,
  handleChangeEndDate,
  handleChangePeriodOfSecret,
  handleChangeArbitrationJurisdiction,
  handleChangeChoiceOfLaw,
  handleChangeCompanyName1,
  handleChangeCompanyName2,
  handleChangeNameOfSigningCompanyI,
  handleChangeNameOfSigningCompanyII,
  handleChangetitleAndCapacityOfSigningCompanyI,
  handleChangetitleAndCapacityOfSigningCompanyII,
  t
}: any) => {
  const Dispatch = useDispatch()

  useEffect(() => {
    Dispatch(showAllProvinces)
    Dispatch(showAllProvincesII)
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
                  {t(nonDisclosurePresenter.addressNumberI.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.addressNumberI.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.addressNumberI.name)}
                  currentValue={nonDisclosurePresenter.addressNumberI.valueAddressNumber}
                  onChange={(event: any) => handleChangeDisclosureAddressNumberI(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.roadI.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.roadI.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.roadI.name)}
                  currentValue={nonDisclosurePresenter.roadI.valueName}
                  onChange={(event: any) => handleChangeDisclosureRoadI(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.provinceI.name)}
                </label>
                <Field
                  disabledState={false}
                  style="form-control"
                  name={nonDisclosurePresenter.provinceI.name}
                  component={SelectField}
                  styleTextError="text-danger"
                  value={nonDisclosurePresenter.provinceI.valueProvince}
                  onChange={(event: any) => {
                    formSelectProvinces(nonDisclosurePresenter.provinceItems, event.target.value)
                  }}
                >
                  {
                    nonDisclosurePresenter.provinceItems.map((province, index: number) => {
                      return (
                        <option key={index} value={province.province_id}>
                          {t(province.name)}
                        </option>
                      )
                    })
                  }

                </Field>
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.districtI.name)}
                </label>
                <Field
                  disabledState={false}
                  style="form-control"
                  name={nonDisclosurePresenter.districtI.name}
                  value={nonDisclosurePresenter.districtI.valueDistrict}
                  component={SelectField}
                  styleTextError="text-danger"
                  onChange={(event: any) => {
                    formSelectDistrict(nonDisclosurePresenter.districtItems, event.target.value)
                  }}
                >
                  {nonDisclosurePresenter.districtItems.map((district, index: number) => {
                    return (
                      <option key={index} value={district.district_id}>
                        {t(district.name)}
                      </option>

                    )
                  })}

                </Field>
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.subDistrictI.name)}
                </label>
                <Field
                  disabledState={false}
                  style="form-control"
                  name={nonDisclosurePresenter.subDistrictI.name}
                  value={nonDisclosurePresenter.subDistrictI.valueSubDistrict}
                  component={SelectField}
                  styleTextError="text-danger"
                  onChange={(event: any) => {
                    formSelectSubDistrict(nonDisclosurePresenter.subDistrictItems, event.target.value)
                  }}
                >
                  {nonDisclosurePresenter.subDistrictItems.map((subDistrict, index: number) => {
                    return (
                      <option key={index} value={subDistrict.sub_district_id}>
                        {t(subDistrict.name)}
                      </option>

                    )
                  })}
                </Field>
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.zipCodeI.name)}
                </label>
                <Field
                  disabledState={false}
                  style="form-control"
                  name={nonDisclosurePresenter.zipCodeI.name}
                  value={nonDisclosurePresenter.zipCodeI.valueZipcode}
                  component={SelectField}
                  styleTextError="text-danger"
                  onChange={(event: any) => {
                    formSelectZipcode(nonDisclosurePresenter.zipCodeItems, event.target.value)
                  }}
                >
                  {nonDisclosurePresenter.zipCodeItems.map((zipcode, index: number) => {
                    return (
                      <option key={index} value={zipcode.zipcode}>
                        {t(zipcode.zipcode)}
                      </option>

                    )
                  })}
                </Field>
              </div>
              <div className="col-12">
                <label>
                  {t(nonDisclosurePresenter.referenceI.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.referenceI.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.referenceI.name)}
                  currentValue={nonDisclosurePresenter.referenceI.valueReference}
                  onChange={(event: any) => handleChangeDisclosureReferenceI(event.target.value)}
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
              <div className="col-12">
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
                  {t(nonDisclosurePresenter.addressNumberI.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.addressNumberII.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.addressNumberI.name)}
                  currentValue={nonDisclosurePresenter.addressNumberII.valueAddressNumber}
                  onChange={(event: any) => handleChangeDisclosureAddressNumberII(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.roadI.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.roadII.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.roadI.name)}
                  currentValue={nonDisclosurePresenter.roadII.valueName}
                  onChange={(event: any) => handleChangeDisclosureRoadII(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.provinceI.name)}
                </label>
                <Field
                  disabledState={false}
                  style="form-control"
                  name={nonDisclosurePresenter.provinceII.name}
                  component={SelectField}
                  styleTextError="text-danger"
                  value={nonDisclosurePresenter.provinceII.valueProvince}
                  onChange={(event: any) => {
                    formSelectProvincesII(nonDisclosurePresenter.provinceItemsII, event.target.value)
                  }}
                >
                  {
                    nonDisclosurePresenter.provinceItemsII.map((provinceII, index: number) => {
                      return (
                        <option key={index} value={provinceII.province_id}>
                          {t(provinceII.name)}
                        </option>
                      )
                    })
                  }

                </Field>
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.districtI.name)}
                </label>
                <Field
                  disabledState={false}
                  style="form-control"
                  name={nonDisclosurePresenter.districtII.name}
                  value={nonDisclosurePresenter.districtII.valueDistrict}
                  component={SelectField}
                  styleTextError="text-danger"
                  onChange={(event: any) => {
                    formSelectDistrictII(nonDisclosurePresenter.districtItemsII, event.target.value)
                  }}
                >
                  {nonDisclosurePresenter.districtItemsII.map((districtII, index: number) => {
                    return (
                      <option key={index} value={districtII.district_id}>
                        {t(districtII.name)}
                      </option>

                    )
                  })}

                </Field>
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.subDistrictI.name)}
                </label>
                <Field
                  disabledState={false}
                  style="form-control"
                  name={nonDisclosurePresenter.subDistrictII.name}
                  value={nonDisclosurePresenter.subDistrictII.valueSubDistrict}
                  component={SelectField}
                  styleTextError="text-danger"
                  onChange={(event: any) => {
                    formSelectSubDistrictII(nonDisclosurePresenter.subDistrictItemsII, event.target.value)
                  }}
                >

                  {nonDisclosurePresenter.subDistrictItemsII.map((subDistrictII, index: number) => {
                    return (
                      <option key={index} value={subDistrictII.sub_district_id}>
                        {t(subDistrictII.name)}
                      </option>

                    )
                  })}
                </Field>
              </div>
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.zipCodeI.name)}
                </label>
                <Field
                  disabledState={false}
                  style="form-control"
                  name={nonDisclosurePresenter.zipCodeII.name}
                  value={nonDisclosurePresenter.zipCodeII.valueZipcode}
                  component={SelectField}
                  styleTextError="text-danger"
                  onChange={(event: any) => {
                    formSelectZipcodeII(nonDisclosurePresenter.zipCodeItemsII, event.target.value)
                  }}
                >

                  {nonDisclosurePresenter.zipCodeItemsII.map((zipcodeII, index: number) => {
                    return (
                      <option key={index} value={zipcodeII.zipcode}>
                        {t(zipcodeII.zipcode)}
                      </option>

                    )
                  })}

                </Field>
              </div>
              <div className="col-12">
                <label>
                  {t(nonDisclosurePresenter.referenceII.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.referenceII.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.referenceII.name)}
                  currentValue={nonDisclosurePresenter.referenceII.valueReference}
                  onChange={(event: any) => handleChangeDisclosureReferenceII(event.target.value)}
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
              <div className="col-lg-6 col-12">
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
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.arbitrationJurisdiction.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.arbitrationJurisdiction.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.arbitrationJurisdiction.name)}
                  currentValue={nonDisclosurePresenter.arbitrationJurisdiction.valueArbitrationJurisdiction}
                  onChange={(event: any) => handleChangeArbitrationJurisdiction(event.target.value)}
                />
              </div>
              <div className="col-12">
                <label>
                  {t(nonDisclosurePresenter.choiceOfLaw.name)}
                </label>
                <Field
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
              <div className="col-lg-6 col-12">
                <label>
                  {t(nonDisclosurePresenter.companyName1.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.companyName1.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.companyName1.name)}
                  currentValue={nonDisclosurePresenter.companyName1.valueCompanyName1}
                  onChange={(event: any) => handleChangeCompanyName1(event.target.value)}
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
                  {t(nonDisclosurePresenter.companyName2.name)}
                </label>
                <Field
                  name={nonDisclosurePresenter.companyName2.name}
                  type="text"
                  component={CustomeTextField}
                  styleTextError="text-danger"
                  className="form-control"
                  label={t(nonDisclosurePresenter.companyName2.name)}
                  currentValue={nonDisclosurePresenter.companyName2.valueCompanyName2}
                  onChange={(event: any) => handleChangeCompanyName2(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
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
                  currentValue={nonDisclosurePresenter.nameOfSigningCompanyII.valueNameOfSigning1}
                  onChange={(event: any) => handleChangeNameOfSigningCompanyII(event.target.value)}
                />
              </div>
              <div className="col-lg-6 col-12">
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
                  currentValue={nonDisclosurePresenter.titleAndCapacityOfSigningCompanyII.valueTitleAndCapacityOfSigning1}
                  onChange={(event: any) => handleChangetitleAndCapacityOfSigningCompanyII(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12"></div>
          <div className="col-md-6 col-12 text-right my-3 pt-4 pr-5">
            <Field
              name="submit"
              type="submit"
              style="btn btn-primary w-50"
              styleTextError="text-danger"
              component={ButtonSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default withTranslation('common')(NonDisclosure)
