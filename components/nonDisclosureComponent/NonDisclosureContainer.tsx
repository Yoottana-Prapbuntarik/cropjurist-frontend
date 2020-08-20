import { connect } from 'react-redux'
import {
  reduxForm
} from 'redux-form'
import { withTranslation } from '../../i18n'
import { FormManager } from '../../manager/formManager'
import NonDisclosure from './NonDisclosure'
import { mapDispatchToProps } from './NonDisclosureAction'

const mapStateToProps = (state: any) => ({
  nonDisclosurePresenter: state.nonDisclosureReducer
})

const form = reduxForm({ form: FormManager.NonDisclosureForm })(NonDisclosure)
export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form))
