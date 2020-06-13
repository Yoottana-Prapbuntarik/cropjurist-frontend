import { connect } from 'react-redux';
import { withTranslation, i18n } from '../../i18n';
import { reduxForm, reset } from 'redux-form';
import Router from 'next/router';
import { companyInformationForm, SendInformationCompany, updateCompanyInformationForm } from '../../apis/companyInformationAPIClient';
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
	ZipCode,
	LabelAuditorLicense
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
let currentIdInformation = 0;

enum CompanyInformationAction {
	handleChangeCompanyName1 = "handleChangeCompanyName1",
	handleChangeCompanyName2 = "handleChangeCompanyName2",
	handleChangeCompanyName3 = "handleChangeCompanyName3",
	handChangeRegistrationNumber = "handChangeRegistrationNumber",
	handChangeAddressNumber = "handChangeAddressNumber",
	handChangeVillage = "handChangeVillage",
	handChangeRoad = "handChangeRoad",
	handleChangeAuditorLicense = "handleChangeAuditorLicense",
	handleChangeAuditor = "handleChangeAuditor",
}

const labelCompanyName1: LabelCompanyName = { name: 'companyName1', keyCompanyName: 'companyName1', valueCompanyName: "" }
const labelCompanyName2: LabelCompanyName = { name: 'companyName2', keyCompanyName: 'companyName2', valueCompanyName: "" }
const labelCompanyName3: LabelCompanyName = { name: 'companyName3', keyCompanyName: 'companyName3', valueCompanyName: "" }

const labelRegistrationNumber: LabelAddress = { keyLabelName: 'registrationNumber', valueLabelAddress: "", name: "registrationNumber" }
const labelAddressNumber: LabelAddress = { keyLabelName: 'addressNumber', valueLabelAddress: "", name: "addressNumber" }
const labelVillage: LabelAddress = { keyLabelName: 'village', valueLabelAddress: "", name: "village" }
const labelRoad: LabelAddress = { keyLabelName: 'road', valueLabelAddress: "", name: "road" }

const labelAuditorLicense: LabelAuditorLicense = { keyLicense: 'auditorLicense', valueLicense: "" }
const labelAuditor: LabelAuditor = { keyAuditorName: 'auditorName', valueAuditorName: "" };

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

const provincesItem: ProvincesItem[] = [{ province_id: 0, name: "selectData" }]

const districtItem: DistrictItem[] = [{ district_id: 0, name: "selectData" }]

const subDistrictItem: SubDistrictItem[] = [{ sub_district_id: 0, name: "selectData" }]

const zipCode: ZipCode[] = [{ zipcode: "selectData" }]

const companyInformationPresenter: CompanyInformationPresenter = {
	keyTitleCompany: 'titleCompany',
	keyTitleAddress: 'titleAddress',
	keyTitleAuditor: 'titleAuditor',
	keySubmit: 'save',
	labelRegistrationNumber: labelRegistrationNumber,
	labelAddressNumber: labelAddressNumber,
	labelVillage: labelVillage,
	labelRoad: labelRoad,
	labelAddressDropdown: labelAddressDropdown,
	labelCheckbox: labelCheckbox,
	labelAuditor: labelAuditor,
	labelAuditorLicense: labelAuditorLicense,
	labelCompanyName1: labelCompanyName1,
	labelCompanyName2: labelCompanyName2,
	labelCompanyName3: labelCompanyName3,
	provincesItem: provincesItem,
	districtItem: districtItem,
	subDistrictItem: subDistrictItem,
	zipCode: zipCode,
	keyGetCurrentInfomationStatus: 404,
	keyPleaseSignin: 'pleaseSignin'
};

export const companyInformationReducer = (state: CompanyInformationPresenter = companyInformationPresenter, action: any) => {
	switch (action.type) {
		case CompanyInformationAction.handleChangeCompanyName1:
			return {
				...state,
				labelCompanyName1: { name: 'companyName1', keyCompanyName: "companyName1", valueCompanyName: action.payload }
			}

		case CompanyInformationAction.handleChangeCompanyName2:
			return {
				...state,
				labelCompanyName2: { name: 'companyName2', keyCompanyName: "companyName2", valueCompanyName: action.payload }

			}

		case CompanyInformationAction.handleChangeCompanyName3:
			return {
				...state,
				labelCompanyName3: { name: 'companyName3', keyCompanyName: "companyName3", valueCompanyName: action.payload }
			}

		case CompanyInformationAction.handChangeRegistrationNumber:
			return {
				...state,
				labelRegistrationNumber: { keyLabelName: 'registrationNumber', valueLabelAddress: action.payload, name: "registrationNumber" }
			}

		case CompanyInformationAction.handChangeAddressNumber:
			return {
				...state,
				labelAddressNumber: { keyLabelName: 'addressNumber', valueLabelAddress: action.payload, name: "addressNumber" }
			}

		case CompanyInformationAction.handChangeVillage:
			return {
				...state,
				labelVillage: { keyLabelName: 'village', valueLabelAddress: action.payload, name: "village" }
			}

		case CompanyInformationAction.handChangeRoad:
			return {
				...state,
				labelRoad: { keyLabelName: 'road', valueLabelAddress: action.payload, name: "road" }
			}

		case CompanyInformationAction.handleChangeAuditorLicense:
			return {
				...state,
				labelAuditorLicense: { keyLicense: 'auditorLicense', valueLicense: action.payload }
			}

		case CompanyInformationAction.handleChangeAuditor:
			return {
				...state,
				labelAuditor: { keyAuditorName: 'auditorName', valueAuditorName: action.payload }
			}

		case companyInformationAddressAction.chooseProvinces_Success:
			let reseProvinces = [{ province_id: 0, name: "selectData" }];
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
				districtItem: newDistrictAction,
			}

		case companyInformationAddressAction.chooseDistrict_Failed:
			let chooseDistrictFailed = [{ district_id: 0, name: "selectData" }];
			return {
				...state,
				districtItem: chooseDistrictFailed,
			}

		case companyInformationAddressAction.chooseSubDistrict_Success:
			let resetSubDistrict = [{ sub_district_id: 0, name: "selectData" }];
			newSubDistrictAction = resetSubDistrict.concat(action.key_sub_district);
			return {
				...state,
				subDistrictItem: newSubDistrictAction,
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
			Router.push("/");

		case SendInformationCompany.SendInformationCompany_Failed:
			alert(i18n.t(action.keyMessage));

		case getInformationCompanyAction.getInformationCompany_Success:
			if (action.getInformationCompany !== undefined) {
				currentIdInformation = action.getInformationCompany.id;
				return {
					...state,
					keyGetCurrentInfomationStatus: action.keyStatus,
					labelCompanyName1: { name: 'companyName1', keyCompanyName: "companyName1", valueCompanyName: state.labelCompanyName1.valueCompanyName = action.getInformationCompany.company_name_1 },
					labelCompanyName2: { name: 'companyName2', keyCompanyName: "companyName2", valueCompanyName: state.labelCompanyName2.valueCompanyName = action.getInformationCompany.company_name_2 },
					labelCompanyName3: { name: 'companyName3', keyCompanyName: "companyName3", valueCompanyName: state.labelCompanyName3.valueCompanyName = action.getInformationCompany.company_name_3 },
					labelRegistrationNumber: { keyLabelName: 'registrationNumber', valueLabelAddress: action.getInformationCompany.registration_no, name: "registrationNumber" },
					labelAddressNumber: { keyLabelName: 'addressNumber', valueLabelAddress: action.getInformationCompany.address_no, name: "addressNumber" },
					labelVillage: { keyLabelName: 'village', valueLabelAddress: action.getInformationCompany.village, name: "village" },
					labelRoad: { keyLabelName: 'road', valueLabelAddress: action.getInformationCompany.road, name: "road" },
					provincesItem: [{ sub_district_id: 0, name: action.getInformationCompany.province }],
					districtItem: [{ district_id: 0, name: action.getInformationCompany.district }],
					subDistrictItem: [{ sub_district_id: 0, name: action.getInformationCompany.sub_district }],
					zipCode: [{ zipcode: action.getInformationCompany.zipcode }],
					labelAuditorLicense: { keyLicense: 'auditorLicense', valueLicense: action.getInformationCompany.license_number },
					labelAuditor: { keyAuditorName: 'auditorName', valueAuditorName: action.getInformationCompany.auditor_name }
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

	updateCompanyInformation: (event: any) => {
		let provinceData = newProvincesAction.find(provinceArray => provinceArray.province_id == event.province);
		let districtData = newDistrictAction.find(districtArray => districtArray.district_id == event.district);
		let subDistrictData = newSubDistrictAction.find(subDistrictArray => subDistrictArray.sub_district_id == event.subDistrict);
		if (provinceData !== undefined && provinceData !== undefined && subDistrictData !== undefined) {
			dispatch(updateCompanyInformationForm(currentIdInformation, event.companyName1, event.companyName2, event.companyName3, event.registrationNumber, event.addressNumber, event.village,
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
	},

	ChangeTextFieldCompanyName1: (event: any) => {
		dispatch({ type: CompanyInformationAction.handleChangeCompanyName1, payload: event });
	},

	ChangeTextFieldCompanyName2: (event: any) => {
		dispatch({ type: CompanyInformationAction.handleChangeCompanyName2, payload: event });
	},

	ChangeTextFieldCompanyName3: (event: any) => {
		dispatch({ type: CompanyInformationAction.handleChangeCompanyName3, payload: event });
	},

	ChangeTextFieldRegistrationNumber: (event: any) => {
		dispatch({ type: CompanyInformationAction.handChangeRegistrationNumber, payload: event });
	},

	ChangeTextFieldAddressNumber: (event: any) => {
		dispatch({ type: CompanyInformationAction.handChangeAddressNumber, payload: event });
	},

	ChangeTextFieldVillage: (event: any) => {
		dispatch({ type: CompanyInformationAction.handChangeVillage, payload: event });
	},

	ChangeTextFieldRoad: (event: any) => {
		dispatch({ type: CompanyInformationAction.handChangeRoad, payload: event });
	},

	ChangeTextFieldAuditorLicense: (event: any) => {
		dispatch({ type: CompanyInformationAction.handleChangeAuditorLicense, payload: event });
	},

	ChangeTextFieldAuditor: (event: any) => {
		dispatch({ type: CompanyInformationAction.handleChangeAuditor, payload: event });
	}
});

const form = reduxForm({ form: FormManager.InformationForm })(companyInformation);

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(form));