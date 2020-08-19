export interface TableEditNonDisclosurePresenter {
    tableHeaderid: string;
    tableHeaderName: string;
    tableHeaderEmailPartyI: string;
    tableHeaderEmailPartyII: string;
    btnTextEdit: string;
    btnTextDelete: string;
    dataGetNonDisclosure: any;
}

export enum TableEditNonDisclosureAction {
    getNonDisclosureEdit = 'getNonDisclosureEdit',
}
