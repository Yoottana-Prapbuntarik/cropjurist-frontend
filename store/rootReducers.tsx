import { combineReducers } from 'redux'
import { navigationReducer } from '../components/Navigation/NavigationContainer'
import { sectionReducer } from '../components/Section/SectionContainer'
import { listViewReducer } from '../components/ListView/ListViewContainer'
import { footerReducer } from '../components/Footer/FooterViewContainer'
import { sectionIncorporationReducer } from '../components/Section/SectionIncorporationContainer'
import { servicesReducer } from '../components/Services/ServicesContainer'
import { signinReducer } from '../components/Signin/SigninContainer'
import { signupReducer } from '../components/Signup/SignupContainer'
import { forgotPasswordReducer } from '../components/ForgotPassword/ForgotPasswordContainer'
import { navigationIncorporationReducer } from '../components/Navigation/NavigationIncorporationContainer'
import { inCorporationManagerReducer } from '../components/IncorporationManager/IncorporationManagerContainer'
import { companyInformationReducer } from '../components/CompanyComponent/CompanyInformationReducer'
import { activateAccountReducer } from '../components/ActivateAccount/ActivateAccountContainer'
import { changePasswordReducer } from '../components/ChangePassword/ChangePasswordContainer'
import { shareMyCompanyReducer } from '../components/ShareMyCompany/ShareMyCompanyReducer'
import { shareHolderManagerReducer } from '../components/AddShareHolderComponent/ShareHolderManagerReducer'
import { preferenceShareManagerReducer } from '../components/PreferenceShareComponent/PreferenceShareManagerReducer'
import { nonDisclosureManagerReducer } from '../components/nonDisclosureManager/nonDisclosureManagerContainer'
import { nonDisclosureReducer } from '../components/nonDisclosureComponent/NonDisclosureReducer'
import { reducer as reduxFormReducer } from 'redux-form'

const rootReducers = combineReducers({
  navigationReducer: navigationReducer,
  sectionReducer: sectionReducer,
  listViewReducer: listViewReducer,
  footerReducer: footerReducer,
  sectionIncorporationReducer: sectionIncorporationReducer,
  servicesReducer: servicesReducer,
  signinReducer: signinReducer,
  signupReducer: signupReducer,
  forgotPasswordReducer: forgotPasswordReducer,
  inCorporationManagerReducer: inCorporationManagerReducer,
  companyInformationReducer: companyInformationReducer,
  navigationIncorporationReducer: navigationIncorporationReducer,
  activateAccountReducer: activateAccountReducer,
  changePasswordReducer: changePasswordReducer,
  shareMyCompanyReducer: shareMyCompanyReducer,
  shareHolderManagerReducer: shareHolderManagerReducer,
  preferenceShareManagerReducer: preferenceShareManagerReducer,
  nonDisclosureManagerReducer: nonDisclosureManagerReducer,
  nonDisclosureReducer: nonDisclosureReducer,
  form: reduxFormReducer
})

export default rootReducers
