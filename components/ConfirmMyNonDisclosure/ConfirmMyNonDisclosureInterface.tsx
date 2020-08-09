export interface StatusDisclosure {
    statusName: string;
    approve: boolean;
}

export interface TextReason {
    name: string;
    valueTextReason: string;
}

export interface ConfirmMyNonDisclosurePresenter {
    headerConfirmMyNonDisclosure: string;
    textReason: TextReason;
    statusDisclosure: StatusDisclosure;
    buttonSend: string;
    textApprove: string;
    textReject: string;
}

export enum ConfirmMyNonDisclosureAction {
    handleChangeStatusDisclosure = 'handleChangeStatusDisclosure',
    handleChangeTextFieldReason = 'handleChangeTextFieldReason',
}
