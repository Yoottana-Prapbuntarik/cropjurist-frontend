"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NextI18Next = require("next-i18next/dist/commonjs").default;
const NextI18NextInstance = new NextI18Next({
    defaultLanguage: "en",
    otherLanguages: ["th"],
    localeSubpaths: {
        th: "thai",
        en: "eng"
    }
});
module.exports = NextI18NextInstance;
exports.default = NextI18NextInstance;
exports.appWithTranslation = NextI18NextInstance.appWithTranslation, exports.withTranslation = NextI18NextInstance.withTranslation, exports.i18n = NextI18NextInstance.i18n, exports.Link = NextI18NextInstance.Link;
//# sourceMappingURL=i18n.js.map