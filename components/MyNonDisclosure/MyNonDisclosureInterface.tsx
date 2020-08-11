
export interface PartyI {
  name: string;
  valueEmailParty: string;
  placeholder: string;
}
export interface PartyII {
    name: string;
    valueEmailParty: string;
    placeholder: string;
}

export interface MyNonDisclosurePresenter {
    headerMyNonDisclosure: string;
    partyI: PartyI;
    partyII: PartyII;
    buttonSendData: string;
}

export enum MyNonDisclosureAction {
    handleChangePartyI = 'handleChangePartyI',
    handleChangePartyII = 'handleChangePartyII'
}
