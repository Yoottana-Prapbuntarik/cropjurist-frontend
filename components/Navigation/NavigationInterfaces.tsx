export interface NavigationItem {
  readonly keyTitle: string;
  readonly routePath?: string;
}

export interface NavigationPresenter {
  readonly navigationItems: NavigationItem[];
}
