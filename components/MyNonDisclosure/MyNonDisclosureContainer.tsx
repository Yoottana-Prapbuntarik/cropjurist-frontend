import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withTranslation } from '../../i18n'
import { mapDispatchToProps } from './MyNonDisclosureAction'
import MyNonDisclosure from './MyNonDisclosure'
import { FormManager } from '../../manager/formManager'

const mapStateToProps = (state: any) => ({
  myNonDisclosurePresenter: state.myNonDisclosureReducer
})

const form = reduxForm({ form: FormManager.MyNonDisclosureForm })(MyNonDisclosure)

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
