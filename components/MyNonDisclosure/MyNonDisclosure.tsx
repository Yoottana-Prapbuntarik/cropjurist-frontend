import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { Field } from 'redux-form'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import './styles.scss'
const NonDisclosure = ({
  handleSubmit,
  myNonDisclosurePresenter,
  handleChangePartyI,
  handleChangePartyII,
  handldSubmitForm,
  t
}: any) => {
  return (
    <div className="container">
      <h3 className="padding-between-section font-weight-bold">
        {t(myNonDisclosurePresenter.headerMyNonDisclosure)}
      </h3>
      <div className="row">
        <div className="col-lg-6 col-12 padding-between-section">
          <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%"></object>
        </div>
        <div className="col-lg-6 col-12 padding-between-section">
          <form className="w-100" onSubmit={handleSubmit(handldSubmitForm)}>
            <div className="form-group text-left">
              <div className="row">
                <div className="col-12 pt-3">
                  <label>
                    {t(myNonDisclosurePresenter.partyI.name)}
                  </label>
                  <Field
                    name={myNonDisclosurePresenter.partyI.name}
                    type="text"
                    component={CustomeTextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(myNonDisclosurePresenter.partyI.placeholder)}
                    currentValue={myNonDisclosurePresenter.partyI.valueParty}
                    onChange={(event: any) => handleChangePartyI(event.target.value)}
                  />
                </div>
                <div className="col-12 py-2">
                  <label>
                    {t(myNonDisclosurePresenter.partyII.name)}
                  </label>
                  <Field
                    name={myNonDisclosurePresenter.partyII.name}
                    type="text"
                    component={CustomeTextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(myNonDisclosurePresenter.partyII.placeholder)}
                    currentValue={myNonDisclosurePresenter.partyII.valueParty}
                    onChange={(event: any) => handleChangePartyII(event.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12"></div>
                <div className="col-md-6 col-12 text-right my-3 pt-4 pr-5">
                  <Field
                    name={myNonDisclosurePresenter.buttonSendData}
                    type="submit"
                    style="btn btn-primary w-50"
                    styleTextError="text-danger"
                    component={ButtonSubmit}
                    label={t(myNonDisclosurePresenter.buttonSendData)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default withTranslation('common')(NonDisclosure)
