export interface NavigationMemberItem {
    readonly keyTitleMemberMenu: string;
    readonly routePathMemberMenu?: string;
}

export interface NavigationMemberPresenter {
    readonly navigationMemberItem: NavigationMemberItem[];
}