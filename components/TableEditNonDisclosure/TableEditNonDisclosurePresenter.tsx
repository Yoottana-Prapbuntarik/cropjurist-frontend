import { TableEditNonDisclosurePresenter } from './TableEditNonDisclosureInterface'
import { KeyManager } from '../../manager/keyManager'
export const tableEditNonDisclosurePresenter: TableEditNonDisclosurePresenter = {
  tableHeaderid: KeyManager.Id,
  tableHeaderName: 'name',
  tableHeaderEmailPartyI: KeyManager.EmailPartyI,
  tableHeaderEmailPartyII: KeyManager.EmailPartyII,
  btnTextEdit: KeyManager.Edit,
  btnTextDelete: KeyManager.Delete,
  dataGetNonDisclosure: []
}
