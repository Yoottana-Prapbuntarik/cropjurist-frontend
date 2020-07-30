export interface DisclosureName {
    readonly name: string;
    valueName: string;
}

export interface AddressNumber {
    readonly name: string;
    valueAddressNumber: string
}

export interface ProvincesItem {
    readonly province_id: number;
    readonly name: string;
}

export interface DistrictItem {
    readonly district_id: number;
    readonly name: string;
}

export interface SubDistrictItem {
    readonly sub_district_id: number;
    readonly name: string;
}

export interface ZipCodeItems {
    readonly zipcode: string;
}

export interface Road {
    readonly name: string;
    valueRoad: string;
}

export interface Province {
    readonly name: string;
    valueProvince: string;
}

export interface District {
    readonly name: string;
    valueDistrict: string;
}

export interface SubDistrict {
    readonly name: string;
    valueSubDistrict: string;
}

export interface Zipcode {
    readonly name: string;
    valueZipcode: string;
}

export interface Reference {
    readonly name: string
    valueReference: string;
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

export interface CompanyName1 {
    readonly name: string;
    valueCompanyName1: string;
}

export interface NameOfSigning1 {
    readonly name: string;
    valueNameOfSigning1: string;
}

export interface TitleAndCapacityOfSigning1 {
    readonly name: string;
    valueTitleAndCapacityOfSigning1: string;
}

export interface CompanyName2 {
    readonly name: string;
    valueCompanyName2: string;
}

export interface NonDisclosurePresenter {
    titleNonDisclosureI: string;
    titleNonDisclosureII: string;
    addressNonDisclosureI: string;
    addressNonDisclosureII: string;
    disclosureNameI: DisclosureName;
    disclosureNameII: DisclosureName;
    addressNumberI: AddressNumber;
    addressNumberII: AddressNumber;
    roadI: Road;
    roadII: Road;
    provinceI: Province;
    provinceII: Province;
    districtI: District;
    districtII: District;
    subDistrictI: SubDistrict;
    subDistrictII: SubDistrict;
    zipCodeI: Zipcode;
    zipCodeII: Zipcode;
    referenceI: Reference;
    referenceII: Reference;
    provinceItems: ProvincesItem[];
    districtItems: DistrictItem[];
    subDistrictItems: SubDistrictItem[];
    zipCodeItems: ZipCodeItems[];
    provinceItemsII: ProvincesItem[];
    districtItemsII: DistrictItem[];
    subDistrictItemsII: SubDistrictItem[];
    zipCodeItemsII: ZipCodeItems[];
    date: Date;
    scopeOfDiscussion: ScopeOfDiscussion;
    endDate: EndDate;
    periodOfSecret: PeriodOfSecret;
    arbitrationJurisdiction: ArbitrationJurisdiction;
    choiceOfLaw: ChoiceOfLaw;
    companyName1: CompanyName1;
    nameOfSigningCompanyI: NameOfSigning1;
    nameOfSigningCompanyII: NameOfSigning1;
    titleAndCapacityOfSigningCompanyI: TitleAndCapacityOfSigning1;
    titleAndCapacityOfSigningCompanyII: TitleAndCapacityOfSigning1;
    companyName2: CompanyName2;
}

export enum NonDisclosureAction {
    handleChangeDisclosureNameI = 'handleChangeDisclosureNameI',
    handleChangeDisclosureNameII = 'handleChangeDisclosureNameII',
    handleChangeDisclosureAddressNumberI = 'handleChangeDisclosureAddressNumberI',
    handleChangeDisclosureAddressNumberII = 'handleChangeDisclosureAddressNumberII',
    handleChangeDisclosureRoadI = 'handleChangeDisclosureRoadI',
    handleChangeDisclosureRoadII = 'handleChangeDisclosureRoadII',
    handleChangeDisclosureReferenceI = 'handleChangeDisclosureReferenceI',
    handleChangeDisclosureReferenceII = 'handleChangeDisclosureReferenceII',
    handleChangeDate = 'handleChangeDate',
    handleChangeScopeOfDiscussion = 'handleChangeScopeOfDiscussion',
    handleChangeEndDate = 'handleChangeEndDate',
    handleChangePeriodOfSecret = 'handleChangePeriodOfSecret',
    handleChangeArbitrationJurisdiction = 'handleChangeArbitrationJurisdiction',
    handleChangeChoiceOfLaw = 'handleChangeChoiceOfLaw',
    handleChangeCompanyName1 = 'handleChangeCompanyName1',
    handleChangeCompanyName2 = 'handleChangeCompanyName2',
    handleChangeNameOfSigningCompanyI = 'handleChangeNameOfSigningCompanyI',
    handleChangeNameOfSigningCompanyII = 'handleChangeNameOfSigningCompanyII',
    handleChangetitleAndCapacityOfSigningCompanyI = 'handleChangetitleAndCapacityOfSigningCompanyI',
    handleChangetitleAndCapacityOfSigningCompanyII = 'handleChangetitleAndCapacityOfSigningCompanyII'
}
