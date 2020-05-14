import { connect } from 'react-redux';
import { withTranslation } from '../../i18n';
import { reduxForm, reset } from 'redux-form';
import { companyInformationForm } from '../../apis/companyInformationAPIClient';
import validate from '../../validator/informationValidator/informationValidator';
import {
	CompanyInformationPresenter,
	LabelCompanyName,
	LabelAddress,
	LabelAddressDropdown,
	LabelCheckbox,
	LabelAuditor,
	OptionSelect
} from './CompanyInformationInterface';
import { FormManager } from '../../manager/formManager';
import companyInformation from './CompanyInformation';
import { Dispatch } from 'redux';

const labelCompanyName: LabelCompanyName[] = [
	{ name: 'companyName1', keyCompanyName: 'companyName1' },
	{ name: 'companyName2', keyCompanyName: 'companyName2' },
	{ name: 'companyName3', keyCompanyName: 'companyName3' }
];

const labelAddress: LabelAddress[] = [
	{ keyLabelName: 'registrationNo' },
	{ keyLabelName: 'addressNo' },
	{ keyLabelName: 'village' },
	{ keyLabelName: 'road' }
];

const optionSelectProvince: OptionSelect[] = [
	{ optionSelctName: 'selectData', optionValue: undefined },
	{ optionSelctName: 'ฺกรุงเทพมหานคร', optionValue: 'ฺกรุงเทพมหานคร' },
	{ optionSelctName: 'เชียงราย', optionValue: 'เชียงราย' },
	{ optionSelctName: 'ลำปาง', optionValue: 'ลำปาง' }
];

const optionSelectDistrict: OptionSelect[] = [
	{ optionSelctName: 'selectData', optionValue: undefined },
	{ optionSelctName: 'จอมทอง', optionValue: 'จอมทอง' },
	{ optionSelctName: 'บางขุนเทียน', optionValue: 'บางขุนเทียน' },
	{ optionSelctName: 'คลองสามวา', optionValue: 'คลองสามวา' }
];

const optionSelectSubDistrict: OptionSelect[] = [
	{ optionSelctName: 'selectData', optionValue: undefined },
	{ optionSelctName: 'บางมด', optionValue: 'บางมด' },
	{ optionSelctName: 'บางแค', optionValue: 'บางแค' },
	{ optionSelctName: 'บางเขน', optionValue: 'บางเขน' }
];

const optionSelectZipCode: OptionSelect[] = [
	{ optionSelctName: 'selectData', optionValue: undefined },
	{ optionSelctName: '10150', optionValue: '10150' },
	{ optionSelctName: '77777', optionValue: '77777' },
	{ optionSelctName: '10500', optionValue: '10500' }
];

const labelAddressDropdown: LabelAddressDropdown[] = [
	{ keyLabelNameDropdown: 'province', optionSelect: optionSelectProvince },
	{ keyLabelNameDropdown: 'district', optionSelect: optionSelectDistrict },
	{ keyLabelNameDropdown: 'subDistrict', optionSelect: optionSelectSubDistrict },
	{ keyLabelNameDropdown: 'zipCode', optionSelect: optionSelectZipCode }
];

const labelCheckbox: LabelCheckbox = {
	keyCheckboxAddress: 'checkboxAddress',
	keyCheckboxAuditor: 'checkboxAuditor'
};

const labelAuditor: LabelAuditor = {
	keyLicense: 'auditorLicense',
	keyAuditorName: 'auditorName'
};

const companyInformationPresenter: CompanyInformationPresenter = {
	keyTitleCompany: 'titleCompany',
	keyTitleAddress: 'titleAddress',
	keyTitleAuditor: 'titleAuditor',
	keySubmit: 'save',
	labelAddress: labelAddress,
	labelAddressDropdown: labelAddressDropdown,
	labelCheckbox: labelCheckbox,
	labelAuditor: labelAuditor,
	labelCompanyName: labelCompanyName
};

export const companyInformationReducer = (state: CompanyInformationPresenter = companyInformationPresenter) => {
	return state;
};

const mapStateToProps = (state: any) => ({
	companyInformationPresenter: state.companyInformationReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	submitCompanyInformation: (event: any) => {
		dispatch(companyInformationForm(event.companyName));
		dispatch(reset(FormManager.InformationForm));
	}
});

const form = reduxForm({ form: FormManager.InformationForm, validate })(companyInformation);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));