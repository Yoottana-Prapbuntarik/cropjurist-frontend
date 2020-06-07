import { connect } from 'react-redux';
import { withTranslation, i18n } from '../../i18n';
import { reduxForm, reset } from 'redux-form';
import { companyInformationForm, SendInformationCompany } from '../../apis/companyInformationAPIClient';
import { getInformationCompany, getInformationCompanyAction } from '../../apis/getInformationCompanyAPIClient';
import {
	companyInformationAddressAction, chooseProvinces,
	chooseDistrict, chooseSubDistrict, chooseZipCode
} from '../../apis/companyInfomationAddressAPIClient';
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
	{ keyLabelName: 'registrationNumber', name: "registrationNumber" },
	{ keyLabelName: 'addressNumber', name: "addressNumber" },
	{ keyLabelName: 'village', name: "village" },
	{ keyLabelName: 'road', name: "road" }
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
	keyAuditorName: 'auditorName',
	valueLicense: 'auditorLicense',
	valueAuditorName: 'auditorName',
};

const provincesItem: ProvincesItem[] = [{ province_id: 0, name: "selectData" }]

const districtItem: DistrictItem[] = [{ district_id: 0, name: "selectData" }]

const subDistrictItem: SubDistrictItem[] = [{ sub_district_id: 0, name: "selectData" }]

const zipCode: ZipCode[] = [{ zipcode: "selectData" }]

enum defineIndexInArray {
	indexOne = 0,
	indexTwo = 1,
	indexThree = 2,
}

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
	zipCode: zipCode,
	keyPleaseSignin: 'pleaseSignin'
};

export const companyInformationReducer = (state: CompanyInformationPresenter = companyInformationPresenter, action: any) => {
	switch (action.type) {
		case companyInformationAddressAction.chooseProvinces_Success:
			let reseProvinces = [{ sub_district_id: 0, name: "selectData" }];
			newProvincesAction = reseProvinces.concat(action.key_provinces);
			return {
				...state,
				provincesItem: newProvincesAction,
			}

		case companyInformationAddressAction.chooseDistrict_Success:
			let resetDistrict = [{ district_id: 0, name: "selectData" }];
			newDistrictAction = resetDistrict.concat(action.key_district);
			return {
				...state,
				districtItem: newDistrictAction
			}

		case companyInformationAddressAction.chooseDistrict_Failed:
			let chooseDistrictFailed = [{ district_id: 0, name: "selectData" }];
			return {
				...state,
				districtItem: chooseDistrictFailed
			}

		case companyInformationAddressAction.chooseSubDistrict_Success:
			let resetSubDistrict = [{ sub_district_id: 0, name: "selectData" }];
			newSubDistrictAction = resetSubDistrict.concat(action.key_sub_district);
			return {
				...state,
				subDistrictItem: newSubDistrictAction
			}

		case companyInformationAddressAction.chooseSubDistrict_Failed:
			let chooseSubDistrictFailed = [{ sub_district_id: 0, name: "selectData" }];
			return {
				...state,
				subDistrictItem: chooseSubDistrictFailed
			}

		case companyInformationAddressAction.chooseZipCode_Success:
			let resetZipCode = [{ zipcode: "selectData" }];
			newZipCodeAction = resetZipCode.concat(action.key_zip_code);
			return {
				...state,
				zipCode: newZipCodeAction
			}

		case companyInformationAddressAction.chooseZipCode_Failed:
			let chooseZipCodeFailed = [{ zipcode: "selectData" }];
			return {
				...state,
				zipCode: chooseZipCodeFailed
			}

		case SendInformationCompany.SendInformationCompany_Success:
			alert(i18n.t(action.keyMessage));

		case SendInformationCompany.SendInformationCompany_Failed:
			alert(i18n.t(action.keyMessage));

		case getInformationCompanyAction.getInformationCompany_Success:
			if (action.getInformationCompany !== undefined) {

				let currentCompanyName = [
					{ name: 'companyName1', keyCompanyName: state.labelCompanyName[defineIndexInArray.indexOne].keyCompanyName = action.getInformationCompany.company_name_1 },
					{ name: 'companyName2', keyCompanyName: state.labelCompanyName[defineIndexInArray.indexTwo].keyCompanyName = action.getInformationCompany.company_name_2 },
					{ name: 'companyName3', keyCompanyName: state.labelCompanyName[defineIndexInArray.indexThree].keyCompanyName = action.getInformationCompany.company_name_3 },
				]

				let currentAddress = [
					{ keyLabelName: 'registrationNumber', name: action.getInformationCompany.registration_no },
					{ keyLabelName: 'addressNumber', name: action.getInformationCompany.address_no },
					{ keyLabelName: 'village', name: action.getInformationCompany.village },
					{ keyLabelName: 'road', name: action.getInformationCompany.road },
				]

				let currentProvinces = [{ sub_district_id: 0, name: action.getInformationCompany.province }];
				let currentDistrict = [{ district_id: 0, name: action.getInformationCompany.district }];
				let currentSubDistrict = [{ sub_district_id: 0, name: action.getInformationCompany.sub_district }];
				let currentZipCode = [{ zipcode: action.getInformationCompany.zipcode }];
				let currentLincense = {
					keyLicense: 'auditorLicense',
					keyAuditorName: 'auditorName',
					valueLicense: action.getInformationCompany.license_number,
					valueAuditorName: action.getInformationCompany.auditor_name,
				}
				return {
					...state,
					labelCompanyName: currentCompanyName,
					labelAddress: currentAddress,
					provincesItem: currentProvinces,
					districtItem: currentDistrict,
					subDistrictItem: currentSubDistrict,
					zipCode: currentZipCode,
					labelAuditor: currentLincense
				}
			} else {
				return state;
			}

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
		if (provinceData !== undefined && provinceData !== undefined && subDistrictData !== undefined) {
			dispatch(companyInformationForm(event.companyName1, event.companyName2, event.companyName3, event.registrationNumber, event.addressNumber, event.village,
				event.road, provinceData.name, districtData.name, subDistrictData.name, event.zipCode, event.auditorLicense, event.auditorName));
		}

		dispatch(reset(FormManager.InformationForm));
		newDistrictAction = [];
		newProvincesAction = [];
		newSubDistrictAction = [];
		newZipCodeAction = [];
	},

	showAllProvinces: () => { dispatch(chooseProvinces()) },

	getCurrentCompanyInformation: () => { dispatch(getInformationCompany()) },

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

const form = reduxForm({ form: FormManager.InformationForm })(companyInformation);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));