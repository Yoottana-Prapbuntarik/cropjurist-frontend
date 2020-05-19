export interface MemberItems {
    readonly linkItems: LinkItems[];
}

export interface LinkItems {
    readonly keyTitlePath: string;
    readonly routePath: string;
}

export interface MemberDialog {
    readonly keyDialogTitle: string;
    readonly keyDialogSubTitle: string;
    readonly keyDialogDetail: string;
    readonly keyCloseTab: string;
}

export interface MemberPresenter {
    readonly keyIncorporationTitle: string;
    readonly memberItems: MemberItems;
    readonly memberDialog: MemberDialog;
}