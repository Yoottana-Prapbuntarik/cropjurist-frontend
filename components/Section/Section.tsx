import { withTranslation } from "../../i18n";

const Section = ({ sectionItem, t }: any) => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
            <img
              src="assets/images/landing/smartphone.png"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
            <h1 className="display-4 mt-3">{t(sectionItem.keyTitle)}</h1>
            <p className="lead text-muted">{t(sectionItem.keyDescription)}</p>
            <a href="#" className="btn btn-primary shadow mr-1">
              {t(sectionItem.keyButtonTitle)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation("common")(Section);
