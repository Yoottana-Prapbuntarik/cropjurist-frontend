import { withTranslation } from '../../i18n'
import { LinkItems } from './IncorporationManagerInterface'
import Link from 'next/link'
import './styles.scss'
import { useRouter } from 'next/router'

const Member = ({ memberPresenter, t, children }: any) => {
  const router = useRouter()

  return (
    <div className="container-fluid p-5">
      <div className="container">
        <h3 className="text-center my-2">
          {t(memberPresenter.keyIncorporationTitle)}
        </h3>
        <div className="row shadow-sm">
          {memberPresenter.memberItems.linkItems.map((item: LinkItems, index: number) => {
            return (
              <div className="col-md-4  col-12 my-5 text-link-IncorporationManager pb-2" key={index}>
                <Link href={item.routePath} >
                  <a className={`text-dark ${router.asPath === item.routePath ? 'active' : ''}`}>{t(item.keyTitlePath)}</a>
                </Link>
                <svg type="button" className="bi bi-question-circle ml-2" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-toggle="modal" data-target="#myModal">
                  <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                  <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
              </div>
            )
          })}
          <div className="col-12 pb-5">
            {children}
          </div>
        </div>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog w-100 modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header d-flex">
                <div className="jusify-content-start pt-2">
                  <h5>{t(memberPresenter.memberDialog.keyDialogTitle)}</h5>
                </div>
                <div className="jusify-content-end">
                  <button type="button" className="close" data-dismiss="modal">
                    <svg className="bi bi-x" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="modal-body px-auto">
                <div>
                  <span className="pr-1">&#10004;</span> {t(memberPresenter.memberDialog.keyDialogSubTitle)}
                </div>
                <div className="my-3">
                  <span className="pr-1">&#10004;</span> {t(memberPresenter.memberDialog.keyDialogDetail)}
                </div>
              </div>
              <button type="button" className="btn btn-primary w-50  my-5 mx-auto" data-dismiss="modal">{t(memberPresenter.memberDialog.keyCloseTab)}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(Member)
