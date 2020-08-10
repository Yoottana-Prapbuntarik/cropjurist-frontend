import { ConfirmMyNonDisclosurePresenter, StatusDisclosure, TextReason } from './ConfirmMyNonDisclosureInterface'

const statusDisclosure: StatusDisclosure = {
  statusName: '',
  approve: null
}

const textReason: TextReason = {
  name: 'reason',
  valueTextReason: ''
}

export const confirmMyNonDisclosurePresenter: ConfirmMyNonDisclosurePresenter = {
  headerConfirmMyNonDisclosure: 'My Information Non Disclosure Agreement',
  textReason: textReason,
  statusDisclosure: statusDisclosure,
  buttonSend: 'Send',
  textApprove: 'Approve',
  textReject: 'Reject'
}
