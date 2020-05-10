export interface LabelCompanyName {
    readonly name: string;
    readonly keyCompanyName: string;
}

export interface LabelAddress {
    readonly keyLabelName: string;
}

export interface OptionSelect {
    readonly optionSelctName: string;
    readonly optionValue: string;
}

export interface LabelAddressDropdown {
    readonly keyLabelNameDropdown: string;
    readonly optionSelect: OptionSelect[];
}

export interface LabelCheckbox {
    readonly keyCheckboxAddress: string;
    readonly keyCheckboxAuditor: string;
}

export interface LabelAuditor {
    readonly keyLicense: string;
    readonly keyAuditorName: string;
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
}