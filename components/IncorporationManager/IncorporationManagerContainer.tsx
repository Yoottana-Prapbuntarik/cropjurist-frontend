import { connect } from 'react-redux';
import { withTranslation } from '../../i18n';
import {
    MemberPresenter,
    MemberItems,
    LinkItems,
    MemberDialog
} from './IncorporationManagerInterface';
import IncorporationManager from './IncorporationManager';

const linkItems: LinkItems[] = [
    { keyTitlePath: "companyInformation", routePath: "/companyInformation" },
]

const memberDialog: MemberDialog = {
    keyDialogTitle: "dialogTitle",
    keyDialogSubTitle: "dialogSubTitle",
    keyDialogDetail: "dialogDetai",
    keyCloseTab: "close"
}

const memberItems: MemberItems = {
    linkItems: linkItems
};

const memberPresenter: MemberPresenter = {
    keyIncorporationTitle: "incorporation",
    memberItems: memberItems,
    memberDialog: memberDialog
};

export const inCorporationManagerReducer = (state: MemberPresenter = memberPresenter) => {
    return state;
};

const mapStateToProps = (state: any) => ({
    memberPresenter: state.inCorporationManagerReducer
});

export default withTranslation('common')(connect(mapStateToProps)(IncorporationManager));