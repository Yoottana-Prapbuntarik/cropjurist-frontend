import React from "react";
import { withTranslation, Link } from "../i18n";

const SecondPage: React.FunctionComponent<any> = ({ t }) => (
  <div>
    <h1>{t("welcome")}</h1>
    <Link href="/">
      <button type="button">{t("go-back")}</button>
    </Link>
  </div>
);

export default withTranslation("common")(SecondPage);
