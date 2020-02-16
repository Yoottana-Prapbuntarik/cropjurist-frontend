import React from "react";
import { i18n, Link, withTranslation } from "../i18n";

const HomePage: React.FunctionComponent<any> = ({ t }) => (
  <div>
    <h1>{t("hello-world")}</h1>
    <button
      type="button"
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "th" : "en")}
    >
      {t("change-language")}
    </button>
    <Link href="/second-page">
      <button type="button">{t("goto-second-page")}</button>
    </Link>
  </div>
);

export default withTranslation("common")(HomePage);
