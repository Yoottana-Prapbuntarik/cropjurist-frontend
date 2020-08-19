import { withTranslation } from '../../i18n'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useState, useEffect } from 'react'
import './styles.scss'
import Router from 'next/router'
import { routeToPageNonDisclosure } from '../../manager/routerManager'
import { useDispatch } from 'react-redux'
const TableEditNonDisclosure = ({
  tableEditNonDisclosurePresenter,
  getNonDisclosure,
  deleteNonDisclosure,
  getNonDisclosureForEdit,
  t
}: any) => {
  const Dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState('')

  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      Dispatch(getNonDisclosure)
    } else {
      alert('Your are not signin !')
      Router.push('/signin')
    }
  }, [])

  const handleClickDeleteButton = async (bool: boolean, idForDelete: string) => {
    setIsOpen(bool)
    setId(idForDelete)
    if (isOpen === true) {
      await deleteNonDisclosure(idForDelete)
      await handleClickCloseDeleteButton()
    }
  }

  const handleClickCloseDeleteButton = () => {
    setIsOpen(false)
  }

  return (
    <div className="row mb-5">
      <div className="col-12 text-right">
        <button className="btn btn-primary mt-3 mb-3" onClick={() => { Router.push(routeToPageNonDisclosure) }}>
          Added News
        </button>
      </div>
      <div className="container">
        <div className="table-responsive p-5">
          <SweetAlert
            style={{ height: '40%' }}
            custom
            showCancel
            showCloseButton
            confirmBtnText="Yes"
            cancelBtnText="No"
            show={isOpen}
            confirmBtnBsStyle="btn bg-primary w-25 text-white mt-5"
            cancelBtnBsStyle="btn bg-danger w-25 text-white mt-5"
            title="Confirm to Delete"
            onConfirm={() => handleClickDeleteButton(true, id)}
            onCancel={() => handleClickCloseDeleteButton()}
          >
            Choose this one choice
          </SweetAlert>
          <table className="table h-100">
            <thead>
              <tr>
                <th>{t(tableEditNonDisclosurePresenter.tableHeaderid)}</th>
                <th>{t(tableEditNonDisclosurePresenter.tableHeaderName)}</th>
                <th>{t(tableEditNonDisclosurePresenter.tableHeaderEmailPartyI)}</th>
                <th>{t(tableEditNonDisclosurePresenter.tableHeaderEmailPartyII)}</th>
                <th>{t(tableEditNonDisclosurePresenter.btnTextEdit)}</th>
                <th>{t(tableEditNonDisclosurePresenter.btnTextDelete)}</th>
              </tr>
            </thead>
            <tbody>
              {
                tableEditNonDisclosurePresenter.dataGetNonDisclosure.map((listDataGetNonDisclosure, index: number) => {
                  const setNewIndex = index + 1
                  return (
                    <tr key={index}>
                      <td>{setNewIndex}</td>
                      <td>
                        NDA {setNewIndex}
                      </td>
                      <td>Approve</td>
                      <td>Approve</td>
                      <td><button className="bg-warning text-white btn-table" onClick={() => getNonDisclosureForEdit(listDataGetNonDisclosure.id)}>{t(tableEditNonDisclosurePresenter.btnTextEdit)}</button></td>
                      <td><button className="bg-danger text-white btn-table" onClick={() => handleClickDeleteButton(true, listDataGetNonDisclosure.id)}>{t(tableEditNonDisclosurePresenter.btnTextDelete)}</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(TableEditNonDisclosure)
