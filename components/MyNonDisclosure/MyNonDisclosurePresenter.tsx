import { MyNonDisclosurePresenter, PartyI, PartyII } from './MyNonDisclosureInterface'
import { KeyManager } from '../../manager/keyManager'

const partyI: PartyI = {
  name: KeyManager.EmailPartyI,
  valueEmailParty: '',
  placeholder: KeyManager.Email
}
const partyII: PartyII = {
  name: KeyManager.EmailPartyII,
  valueEmailParty: '',
  placeholder: KeyManager.Email
}

export const myNonDisclosurePresenter: MyNonDisclosurePresenter = {
  headerMyNonDisclosure: 'disclosureAgreement',
  partyI: partyI,
  partyII: partyII,
  buttonSendData: KeyManager.Send
}
