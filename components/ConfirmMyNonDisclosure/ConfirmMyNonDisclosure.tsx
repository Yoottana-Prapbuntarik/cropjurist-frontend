import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { Field } from 'redux-form'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
import CheckBox from '../FieldComponents/CheckBox'
import './styles.scss'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'next/router'

const ConfirmMyNonDisclosure = ({
  handleSubmit,
  confirmMyNonDisclosurePresenter,
  handleChangeTextFieldReason,
  handleChangeStatusDisclosure,
  handldSubmitForm,
  verificationMyNonDistclosure,
  t
}: any) => {
  const dispatch = useDispatch()
  const [pdf, setPdf] = useState('')

  useEffect(() => {
    dispatch(verificationMyNonDistclosure)
    if (localStorage.getItem('pdf_view_link')) {
      const pdfLink = localStorage.getItem('pdf_view_link')
      setPdf(pdfLink)
    } else {
      Router.replace('/nonDisclosure')
    }
  }, [])
  return (
    <div className="container">
      <h3 className="padding-between-section font-weight-bold">
        {t(confirmMyNonDisclosurePresenter.headerConfirmMyNonDisclosure)}
      </h3>
      <div className="row">
        <div className="col-lg-8 col-12 padding-between-section">
          <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src={pdf}></iframe>
          </div>
        </div>
        <div className="col-lg-4 col-12 padding-between-section">
          <form className="w-100" onSubmit={handleSubmit(handldSubmitForm)}>
            <div className="form-group text-left">
              <div className="row pt-5">
                <div className="col-12 pt-3">
                  <label>
                    {t(confirmMyNonDisclosurePresenter.textReason.name)}
                  </label>
                  <Field
                    name={confirmMyNonDisclosurePresenter.textReason.name}
                    type="text"
                    component={CustomeTextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(confirmMyNonDisclosurePresenter.textReason.name)}
                    currentValue={confirmMyNonDisclosurePresenter.textReason.valueTextReason}
                    onChange={(event: any) => handleChangeTextFieldReason(event.target.value)}
                  />
                </div>

                <div className="col-6 pt-3">
                  <div className="checkbox pb-2">
                    <Field
                      type="checkbox" name={confirmMyNonDisclosurePresenter.textApprove}
                      valueDisable={confirmMyNonDisclosurePresenter.statusDisclosure.approve !== null && true} component={CheckBox}
                      onChange={() => handleChangeStatusDisclosure(true)}
                    />
                    <label className="pl-1">
                      {t(confirmMyNonDisclosurePresenter.textApprove)}
                    </label>
                  </div>
                </div>
                <div className="col-6 pt-3">
                  <div className="checkbox pb-2">
                    <Field
                      type="checkbox" name={confirmMyNonDisclosurePresenter.textReject}
                      valueDisable={confirmMyNonDisclosurePresenter.statusDisclosure.approve !== null && true} component={CheckBox}
                      onChange={() => handleChangeStatusDisclosure(false)}
                    />
                    <label className="pl-1">
                      {t(confirmMyNonDisclosurePresenter.textReject)}
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-right pt-4">
                  <Field
                    name={confirmMyNonDisclosurePresenter.buttonSend}
                    type="submit"
                    style="btn btn-primary w-100"
                    styleTextError="text-danger"
                    component={ButtonSubmit}
                    label={t(confirmMyNonDisclosurePresenter.buttonSend)}
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

export default withTranslation('common')(ConfirmMyNonDisclosure)
