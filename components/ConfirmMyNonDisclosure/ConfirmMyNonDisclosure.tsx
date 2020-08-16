import { withTranslation } from '../../i18n'
import Textarea from '../FieldComponents/Textarea'
import { Field } from 'redux-form'
import ButtonSubmit from '../FieldComponents/ButtonSubmit'
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
  const [isAppove, setApprove] = useState(null)

  const handleApprove = async (newStateApprove: boolean) => {
    if (newStateApprove === true) {
      await setApprove(newStateApprove)
      await handldSubmitForm({ Approve: newStateApprove, reason: 'approve' })
    } else if (newStateApprove === false) {
      await handleChangeStatusDisclosure(newStateApprove)
      await setApprove(newStateApprove)
    } else {
      return null
    }
  }

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
      {console.log(isAppove)}
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
          <div className="d-flex jusify-content-center align-items-center h-100">
            <div className="container">
              <div className="row">
                <div className="col-12 mt-3 mb-3">
                  <button className="btn bg-success text-white w-100" onClick={() => handleApprove(true)}>
                    {t(confirmMyNonDisclosurePresenter.textApprove)}
                  </button>
                </div>
                <div className="col-12 mt-3 mb-3">
                  <button className="btn bg-danger text-white w-100" onClick={() => handleApprove(false)}>
                    {t(confirmMyNonDisclosurePresenter.textReject)}
                  </button>
                </div>
                {isAppove === false &&
                  <div className="col-12">
                    <form className="w-100" onSubmit={handleSubmit(handldSubmitForm)}>
                      <div className="form-group text-left">
                        <div className="row">
                          <div className="col-12 pt-3">
                            <label>
                              {t(confirmMyNonDisclosurePresenter.textReason.name)}
                            </label>
                            <Field
                              name={confirmMyNonDisclosurePresenter.textReason.name}
                              type="text"
                              component={Textarea}
                              styleTextError="text-danger"
                              className="form-control"
                              label={t(confirmMyNonDisclosurePresenter.textReason.name)}
                              currentValue={confirmMyNonDisclosurePresenter.textReason.valueTextReason}
                              onChange={(event: any) => handleChangeTextFieldReason(event.target.value, isAppove === false && false)}
                            />
                          </div>
                          <div className="col-12 text-right pt-4">
                            <Field
                              name={confirmMyNonDisclosurePresenter.buttonSend}
                              type="submit"
                              style="btn btn-primary w-50"
                              styleTextError="text-danger"
                              component={ButtonSubmit}
                              label={t(confirmMyNonDisclosurePresenter.buttonSend)}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default withTranslation('common')(ConfirmMyNonDisclosure)
