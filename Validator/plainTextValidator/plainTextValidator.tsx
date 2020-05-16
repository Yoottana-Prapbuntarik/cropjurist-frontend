import { regexExpression } from '../interfaceValidator';
import { KeyManager } from '../../manager/keyManager';

export enum Field {
	FirstName = 'FirstName',
	LastName = 'LastName',
	CompanyName1 = 'CompanyName1',
	CompanyName2 = 'CompanyName2',
	CompanyName3 = 'CompanyName3',
	RegistrationNumber = 'RegistrationNumber',
	AddressNumber = 'AddressNumber',
	Village = 'Village',
	Road = 'Road',
	Province = 'Province',
	District = 'District',
	SubDistrict = 'SubDistrict',
	ZipCode = 'ZipCode',
	AuditorLicense = 'AuditorLicense',
	AuditorName = 'AuditorName'
}

export const plainTextValidator = (text: string, field: Field) => {
	if (isPlainText(text)) {
		return {
			status: true,
			keyMessage: null
		};
	}
		return {
			status: false,
			keyMessage: keyErrorMessage(field)
		};
};

export const plainTextOrWhitespaceValidator = (text: string, field: Field) => {
	if (isPlainTextAndWhitespace(text)) {
		return {
			status: true,
			keyMessage: null
		}
	}
		return {
			status: false,
			keyMessage: keyErrorMessage(field)
		};
}

const keyErrorMessage = (field: Field) => {
	switch (field) {
		case Field.FirstName:
			return KeyManager.FirstNameInValid;
		case Field.LastName:
			return KeyManager.LastNameInValid;
		case Field.CompanyName1:
			return KeyManager.CompanyNameInvalid;
		case Field.CompanyName2:
			return KeyManager.CompanyNameInvalid;
		case Field.CompanyName3:
			return KeyManager.CompanyNameInvalid;
		case Field.RegistrationNumber:
			return KeyManager.RegistrationNumberInvalid;
		case Field.AddressNumber:
			return KeyManager.AddressNumberInvalid;
		case Field.Village:
			return KeyManager.VillageInvalid;
		case Field.Road:
			return KeyManager.RoadInvalid;
		case Field.Province:
			return KeyManager.ProvinceInvalid;
		case Field.District:
			return KeyManager.DistrictInvalid;
		case Field.SubDistrict:
			return KeyManager.SubDistrictInvalid;
		case Field.ZipCode:
			return KeyManager.ZipCodeInvalid;
		case Field.AuditorLicense:
			return KeyManager.AuditorLicenseInvalid;
		case Field.AuditorName:
			return KeyManager.AuditorNameInvalid;
		default:
			return '';
	}
};

const isPlainText = (text: string) => {
	return regexExpression.regexText.test(text) && text !== undefined;
};

const isPlainTextAndWhitespace = (text: string) => {
	return regexExpression.regexTextOrWhiteSpace.test(text) || text == undefined;
}