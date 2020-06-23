import { withTranslation } from '../../i18n'

const ShareMyCompany = ({ shareMyCompanyPresenter, t }: any) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-12">
          {t(shareMyCompanyPresenter.keyHeaderHolders)}
        </div>
        <div className="col-lg-4 col-12">
          {t(shareMyCompanyPresenter.keyHeaderShareInformation)}
        </div>
        <div className="col-lg-4 col-12">
          {t(shareMyCompanyPresenter.keyHeaderDashBoard)}
        </div>
      </div>
    </div>
  )
}

export default withTranslation('common')(ShareMyCompany)
