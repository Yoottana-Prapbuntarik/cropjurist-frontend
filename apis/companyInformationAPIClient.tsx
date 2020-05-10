import { Dispatch } from "redux";

export enum SendInformationCompany {
    SendInformationCompany_Success = 'SendInformationCompany_Success',
    SendInformationCompany_Failed = 'SendInformationCompany_Failed'
}

export const companyInformationForm: any = (companyName: string) => async (dispatch: Dispatch
    ) => {
        
        if (companyName !== undefined) {
            dispatch({
                type: SendInformationCompany.SendInformationCompany_Success
            })

        } else {
            dispatch({
                type: SendInformationCompany.SendInformationCompany_Failed
            })
        }
};