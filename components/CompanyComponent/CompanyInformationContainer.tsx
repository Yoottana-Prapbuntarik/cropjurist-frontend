import { connect } from 'react-redux';
import { withTranslation, i18n } from '../../i18n';
import { reduxForm, reset } from 'redux-form';
import { companyInformationForm, SendInformationCompany } from '../../apis/companyInformationAPIClient';
import { chooseProvinces, chooseProvincesAction } from '../../apis/chooseProvincesAPI';
import { chooseDistrict, chooseDistrictAction } from '../../apis/chooseDistrictAPI';
import { chooseSubDistrict, chooseSubDistrictAction } from '../../apis/chooseSubDistrict';
import { chooseZipCode, chooseZipCodeAction } from '../../apis/chooseZipCode';
import validate from '../../validate/informationValidator/informationValidator';
import {
	CompanyInformationPresenter,
	LabelCompanyName,
	LabelAddress,
	LabelAddressDropdown,
	LabelCheckbox,
	LabelAuditor,
	ProvincesItem,
	DistrictItem,
	SubDistrictItem,
	ZipCode
} from './CompanyInformationInterface';
import { FormManager } from '../../manager/formManager';
import companyInformation from './CompanyInformation';
import { Dispatch } from 'redux';

let provinceId: number = 0;
let districtId: number = 0;
let subDistrictId: number = 0;

let newProvincesAction = [];
let newSubDistrictAction = [];
let newDistrictAction = [];
let newZipCodeAction = [];

const labelCompanyName: LabelCompanyName[] = [
	{ name: 'companyName1', keyCompanyName: 'companyName1' },
	{ name: 'companyName2', keyCompanyName: 'companyName2' },
	{ name: 'companyName3', keyCompanyName: 'companyName3' }
];

const labelAddress: LabelAddress[] = [
	{ keyLabelName: 'registrationNumber' },
	{ keyLabelName: 'addressNumber' },
	{ keyLabelName: 'village' },
	{ keyLabelName: 'road' }
];

const labelAddressDropdown: LabelAddressDropdown[] = [
	{ keyLabelNameDropdown: 'province' },
	{ keyLabelNameDropdown: 'district' },
	{ keyLabelNameDropdown: 'subDistrict' },
	{ keyLabelNameDropdown: 'zipCode' }
];

const labelCheckbox: LabelCheckbox = {
	keyCheckboxAddress: 'checkboxAddress',
	keyCheckboxAuditor: 'checkboxAuditor'
};

const labelAuditor: LabelAuditor = {
	keyLicense: 'auditorLicense',
	keyAuditorName: 'auditorName'
};

const provincesItem: ProvincesItem[] = [
	{
		province_id: 0,
		name: "selectData"
	}
]

const districtItem: DistrictItem[] = [
	{
		district_id: 0,
		name: "selectData"
	}
]
const subDistrictItem: SubDistrictItem[] = [
	{
		sub_district_id: 0,
		name: "selectData"
	}
]

const zipCode: ZipCode[] = [
	{
		zipcode: "selectData"
	}
]

const companyInformationPresenter: CompanyInformationPresenter = {
	keyTitleCompany: 'titleCompany',
	keyTitleAddress: 'titleAddress',
	keyTitleAuditor: 'titleAuditor',
	keySubmit: 'save',
	labelAddress: labelAddress,
	labelAddressDropdown: labelAddressDropdown,
	labelCheckbox: labelCheckbox,
	labelAuditor: labelAuditor,
	labelCompanyName: labelCompanyName,
	provincesItem: provincesItem,
	districtItem: districtItem,
	subDistrictItem: subDistrictItem,
	zipCode: zipCode
};

export const companyInformationReducer = (state: CompanyInformationPresenter = companyInformationPresenter, action: any) => {
	switch (action.type) {
		case chooseProvincesAction.chooseProvinces_Success:
			let reseProvinces = [{ sub_district_id: 0, name: "selectData" }];
			newProvincesAction = reseProvinces.concat(action.key_provinces);
			return {
				...state,
				provincesItem: newProvincesAction,
			}

		case chooseDistrictAction.chooseDistrict_Success:
			let resetDistrict = [{ district_id: 0, name: "selectData" }];
			newDistrictAction = resetDistrict.concat(action.key_district);
			return {
				...state,
				districtItem: newDistrictAction
			}

		case chooseSubDistrictAction.chooseSubDistrict_Success:
			let resetSubDistrict = [{ sub_district_id: 0, name: "selectData" }];
			newSubDistrictAction = resetSubDistrict.concat(action.key_sub_district);
			return {
				...state,
				subDistrictItem: newSubDistrictAction
			}

		case chooseZipCodeAction.chooseZipCode_Success:
			let resetZipCode = [{ zipcode: "selectData" }];
			newZipCodeAction = resetZipCode.concat(action.key_zip_code);
			return {
				...state,
				zipCode: newZipCodeAction
			}

		case SendInformationCompany.SendInformationCompany_Success:
			alert(i18n.t(action.keyMessage));
		
		case SendInformationCompany.SendInformationCompany_Failed:
			alert(i18n.t(action.keyMessage));

		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	companyInformationPresenter: state.companyInformationReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	submitCompanyInformation: (event: any) => {
		let provinceData = newProvincesAction.find(provinceArray => provinceArray.province_id == event.province);
		let districtData = newDistrictAction.find(districtArray => districtArray.district_id == event.district);
		let subDistrictData = newSubDistrictAction.find(subDistrictArray => subDistrictArray.sub_district_id == event.subDistrict);
		dispatch(companyInformationForm(event.companyName1, event.companyName2, event.companyName3, event.registrationNumber, event.addressNumber, event.village,
			event.road, provinceData.name, districtData.name, subDistrictData.name, event.zipCode, event.auditorLicense, event.auditorName));
		dispatch(reset(FormManager.InformationForm));
		newDistrictAction = [];
		newProvincesAction = [];
		newSubDistrictAction = [];
		newZipCodeAction = [];
	},

	showAllProvinces: () => dispatch(chooseProvinces()),

	formSelectProvinces: (event: any) => {
		dispatch(chooseDistrict(event))
		provinceId = event;
	},

	formSelectDistrict: (event: any) => {
		districtId = event;
		dispatch(chooseSubDistrict(provinceId, districtId));
	},

	formSelectSubDistrict: (event: any) => {
		subDistrictId = event;
		dispatch(chooseZipCode(provinceId, districtId, subDistrictId));
	}
});

const form = reduxForm({ form: FormManager.InformationForm, validate })(companyInformation);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));