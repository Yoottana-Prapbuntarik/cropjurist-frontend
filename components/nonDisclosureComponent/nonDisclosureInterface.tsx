export interface DisclosureName {
    readonly name: string;
    valueName: string;
}

export interface Address {
    readonly name: string;
    valueAddress: string
}

export interface Date {
    readonly name: string;
    valueDate: string;
}

export interface ScopeOfDiscussion {
    readonly name: string,
    valueScopeDiscussion: string;
}

export interface EndDate {
    readonly name: string;
    valueDate: string;
}
export interface PeriodOfSecret {
    readonly name: string;
    valuePeriodOfSecret: string;
}

export interface ArbitrationJurisdiction {
    readonly name: string;
    valueArbitrationJurisdiction: string;
}

export interface ChoiceOfLaw {
    readonly name: string;
    valueChoiceOfLaw: string;
}

export interface NameOfSigning {
    readonly name: string;
    valueNameOfSigning: string;
}

export interface TitleAndCapacityOfSigning {
    readonly name: string;
    valueTitleAndCapacityOfSigning: string;
}

export interface NonDisclosurePresenter {
    titleNonDisclosureI: string;
    titleNonDisclosureII: string;
    addressNonDisclosureI: string;
    addressNonDisclosureII: string;
    disclosureNameI: DisclosureName;
    disclosureNameII: DisclosureName;
    addressI: Address;
    addressII: Address;
    date: Date;
    scopeOfDiscussion: ScopeOfDiscussion;
    endDate: EndDate;
    periodOfSecret: PeriodOfSecret;
    arbitrationJurisdiction: ArbitrationJurisdiction;
    choiceOfLaw: ChoiceOfLaw;
    nameOfSigningCompanyI: NameOfSigning;
    nameOfSigningCompanyII: NameOfSigning;
    titleAndCapacityOfSigningCompanyI: TitleAndCapacityOfSigning;
    titleAndCapacityOfSigningCompanyII: TitleAndCapacityOfSigning;
    keyPleaseSignin: string;
    buttonSubmit: string;
}

export enum NonDisclosureAction {
    handleChangeDisclosureNameI = 'handleChangeDisclosureNameI',
    handleChangeDisclosureNameII = 'handleChangeDisclosureNameII',
    handleChangeDisclosureAddressI = 'handleChangeDisclosureAddressI',
    handleChangeDisclosureAddressII = 'handleChangeDisclosureAddressII',
    handleChangeDisclosureReferenceI = 'handleChangeDisclosureReferenceI',
    handleChangeDisclosureReferenceII = 'handleChangeDisclosureReferenceII',
    handleChangeDate = 'handleChangeDate',
    handleChangeScopeOfDiscussion = 'handleChangeScopeOfDiscussion',
    handleChangeEndDate = 'handleChangeEndDate',
    handleChangePeriodOfSecret = 'handleChangePeriodOfSecret',
    handleChangeArbitrationJurisdiction = 'handleChangeArbitrationJurisdiction',
    handleChangeChoiceOfLaw = 'handleChangeChoiceOfLaw',
    handleChangeNameOfSigningCompanyI = 'handleChangeNameOfSigningCompanyI',
    handleChangeNameOfSigningCompanyII = 'handleChangeNameOfSigningCompanyII',
    handleChangetitleAndCapacityOfSigningCompanyI = 'handleChangetitleAndCapacityOfSigningCompanyI',
    handleChangetitleAndCapacityOfSigningCompanyII = 'handleChangetitleAndCapacityOfSigningCompanyII'
}
