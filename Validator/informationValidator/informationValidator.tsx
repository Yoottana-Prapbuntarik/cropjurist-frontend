import { FormErrors } from 'redux-form';
import { ErrorField } from '../InterfaceValidator';
import { plainTextValidator, plainTextAndWhitespaceValidator, Field } from '../plainTextValidator/plainTextValidator';

const validate = (informationForm: any, { t }: any): FormErrors => {
	{ console.log(informationForm) }
	let errors: FormErrors<ErrorField> = {};
	let companyNameValidatorResult = plainTextValidator(informationForm.companyName1, Field.CompanyName1);
	let companyNameValidatorResult2 = plainTextAndWhitespaceValidator(informationForm.companyName2, Field.CompanyName2);
	let companyNameValidatorResult3 = plainTextAndWhitespaceValidator(informationForm.companyName3, Field.CompanyName3);
	let registrationNoValidatorResult = plainTextValidator(informationForm.registrationNo, Field.RegistrationNo);
	let addressNoValidatorResult = plainTextValidator(informationForm.addressNo, Field.AddressNo);
	let villageValidatorResult = plainTextValidator(informationForm.village, Field.Village);
	let roadValidatorResult = plainTextValidator(informationForm.road, Field.Road);
	let provinceValidatorResult = plainTextValidator(informationForm.province, Field.Province);
	let districtValidatorResult = plainTextValidator(informationForm.district, Field.District);
	let subDistrictValidatorResult = plainTextValidator(informationForm.subDistrict, Field.SubDistrict);
	let zipCodeValidatorResult = plainTextValidator(informationForm.zipCode, Field.ZipCode);
	let auditorLicenseValidatorResult = plainTextValidator(informationForm.auditorLicense, Field.AuditorLicense);
	let auditorNameValidatorResult = plainTextValidator(informationForm.auditorName, Field.AuditorName);

	if (!companyNameValidatorResult.status) {
		errors.companyName1 = t(companyNameValidatorResult.keyMessage);
	}

	if (!companyNameValidatorResult2.status) {
		errors.companyName2 = t(companyNameValidatorResult2.keyMessage);
	}

	if (!companyNameValidatorResult3.status) {
		errors.companyName3 = t(companyNameValidatorResult3.keyMessage);
	}

	if (!registrationNoValidatorResult.status) {
		errors.registrationNo = t(registrationNoValidatorResult.keyMessage);
	}

	if (!addressNoValidatorResult.status) {
		errors.addressNo = t(addressNoValidatorResult.keyMessage);
	}

	if (!villageValidatorResult.status) {
		errors.village = t(villageValidatorResult.keyMessage);
	}

	if (!roadValidatorResult.status) {
		errors.road = t(roadValidatorResult.keyMessage);
	}

	if (!provinceValidatorResult.status) {
		errors.province = t(provinceValidatorResult.keyMessage);
	}

	if (!districtValidatorResult.status) {
		errors.district = t(districtValidatorResult.keyMessage);
	}

	if (!subDistrictValidatorResult.status) {
		errors.subDistrict = t(subDistrictValidatorResult.keyMessage);
	}

	if (!zipCodeValidatorResult.status) {
		errors.zipCode = t(zipCodeValidatorResult.keyMessage);
	}

	if (!auditorLicenseValidatorResult.status) {
		
		errors.auditorLicense = t(auditorLicenseValidatorResult.keyMessage);
	}
	
	if (!auditorNameValidatorResult.status) {
		errors.auditorName = t(auditorNameValidatorResult.keyMessage);
	}

	return errors;
};

export default validate;