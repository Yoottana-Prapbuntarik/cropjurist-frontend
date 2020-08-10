import { MyNonDisclosurePresenter, PartyI, PartyII } from './MyNonDisclosureInterface'

const partyI: PartyI = {
  name: 'Party',
  valueParty: '',
  placeholder: 'Input email'
}
const partyII: PartyII = {
  name: 'PartyII',
  valueParty: '',
  placeholder: 'Input email'
}

export const myNonDisclosurePresenter: MyNonDisclosurePresenter = {
  headerMyNonDisclosure: 'My Information Non Disclosure Agreement',
  partyI: partyI,
  partyII: partyII,
  buttonSendData: 'Send'
}
