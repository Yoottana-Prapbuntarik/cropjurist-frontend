export interface LabelCompanyName {
    readonly name: string;
    readonly keyCompanyName: string;
}

export interface LabelAddress {
    readonly keyLabelName: string;
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
    readonly keyAuditorName: string;
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
    provincesItem: ProvincesItem[];
    districtItem: DistrictItem[];
    subDistrictItem: SubDistrictItem[];
    zipCode: ZipCode[];
}