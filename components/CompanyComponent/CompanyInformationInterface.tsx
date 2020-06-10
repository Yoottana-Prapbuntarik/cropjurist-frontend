export interface LabelCompanyName {
    name: string
    keyCompanyName: string;
}

export interface LabelAddress {
    readonly keyLabelName: string;
    readonly name: string;
}

export interface LabelAddressDropdown {
    readonly keyLabelNameDropdown: string;
}

export interface LabelCheckbox {
    readonly keyCheckboxAddress: string;
    readonly keyCheckboxAuditor: string;
}

export interface LabelAuditor {
    readonly keyLicense: string;
    valueLicense: string;
    readonly keyAuditorName: string;
    valueAuditorName: string;
}

export interface ProvincesItem {
    province_id: number;
    name: String;
}

export interface DistrictItem {
    district_id: number;
    name: String;
}

export interface SubDistrictItem {
    sub_district_id: number;
    name: String;
}

export interface ZipCode {
    zipcode: String;
}

export interface CompanyInformationPresenter {
    readonly keyTitleCompany: string;
    readonly keyTitleAddress: string;
    readonly keyTitleAuditor: string;
    readonly keySubmit: string;
    readonly labelAddress: LabelAddress[];
    readonly labelAddressDropdown: LabelAddressDropdown[];
    readonly labelCheckbox: LabelCheckbox;
    readonly labelAuditor: LabelAuditor;
    readonly labelCompanyName: LabelCompanyName[];
    readonly keyPleaseSignin: string;
    stateSelectInformation: string
    keyGetCurrentInfomationStatus: number;
    provincesItem: ProvincesItem[];
    districtItem: DistrictItem[];
    subDistrictItem: SubDistrictItem[];
    zipCode: ZipCode[];
}