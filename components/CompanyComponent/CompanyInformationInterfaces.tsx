export interface LabelCompanyName {
    name: string
    keyCompanyName: string;
    valueCompanyName: string;
}

export interface LabelAddress {
     keyLabelName: string;
     name: string;
     valueLabelAddress:string
}

export interface LabelAddressDropdown {
    readonly keyLabelNameDropdown: string;
}

export interface LabelCheckbox {
    readonly keyCheckboxAddress: string;
    readonly keyCheckboxAuditor: string;
}

export interface LabelAuditorLicense {
    keyLicense: string;
    valueLicense: string;
}

export interface LabelAuditor{
    keyAuditorName: string;
    valueAuditorName: string;
}

export interface ProvincesItem {
    provinceID: number;
    name: string;
}

export interface DistrictItem {
    districtID: number;
    name: string;
}

export interface SubDistrictItem {
    subDistrictID: number;
    name: string;
}

export interface ZipCode {
    zipcode: string;
}

export interface CompanyInformationPresenter {
    readonly keyTitleCompany: string;
    readonly keyTitleAddress: string;
    readonly keyTitleAuditor: string;
    readonly keySubmit: string;
    readonly labelRegistrationNumber: LabelAddress;
    readonly labelAddressNumber: LabelAddress;
    readonly labelVillage: LabelAddress;
    readonly labelRoad: LabelAddress;
    readonly labelAddressDropdown: LabelAddressDropdown[];
    readonly labelCheckbox: LabelCheckbox;
    readonly labelAuditor: LabelAuditor;
    readonly labelAuditorLicense: LabelAuditorLicense;
    readonly labelCompanyName1: LabelCompanyName;
    readonly labelCompanyName2: LabelCompanyName;
    readonly labelCompanyName3: LabelCompanyName;
    readonly keyPleaseSignin: string;
    keyGetCurrentInfomationStatus: number;
    provincesItem: ProvincesItem[];
    districtItem: DistrictItem[];
    subDistrictItem: SubDistrictItem[];
    zipCode: ZipCode[];
}
