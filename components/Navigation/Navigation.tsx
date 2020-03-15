import Link from "next/link";
import NavigationItem from "./NavigationInterfaces";
import { withTranslation } from "../../i18n";
import { useDispatch } from "react-redux";

const Navigation = ({ navigationItems, changeLanguage, t }: any) => {
  const dispatch = useDispatch();
  return (
    <header className="site-header">
      <div id="header-wrap">
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-between">
              <a className="navbar-brand logo text-dark h2 mb-0">
                Corp
                <span className="text-primary font-weight-bold">Jurist</span>
              </a>
              <nav className="navbar navbar-expand-lg navbar-light ml-auto">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    {navigationItems.map(
                      (item: NavigationItem, index: number) => (
                        <li
                          className="nav-item"
                          key={`navigation-item-${index}`}
                        >
                          <Link href={item.routePath}>
                            <a className="nav-link " href="#">
                              {t(item.keyTitle)}
                            </a>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </nav>
              <button
                className="btn  ml-8 d-none d-lg-block"
                onClick={() => dispatch(changeLanguage)}
              >
                {t("languages")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withTranslation("common")(Navigation);
