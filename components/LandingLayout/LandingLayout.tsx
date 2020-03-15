import Head from "next/head";
import Navigation from "../Navigation/NavigationContainer";
import Footer from "../Footer/FooterViewContainer";
import { withTranslation } from "../../i18n";

const LandingLayout = (props: any) => (
  <div className="page-wrapper">
    <Head>
      <title>{props.t("landingTitle")}</title>
    </Head>
    <Navigation />
    {props.children}
    <Footer />
  </div>
);

export default withTranslation("common")(LandingLayout);
