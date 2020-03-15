export interface SubscribeItem {
  readonly keySubScribeTitle: string;
  readonly keySubDescriptionForSubScribe: string;
  readonly keySubScribeDescription: string;
  readonly keyEmail: string;
  readonly keySubmitButton: string;
}

export interface FooterItem {
  readonly subscribeItem: SubscribeItem;
  readonly menu: FooterMenu;
  readonly socialItems: SocialItem[];
}

export interface FooterMenu {
  readonly keyHeaderTitle: string;
  readonly footerMenuItems: MenuItem[];
}

export interface MenuItem {
  readonly keyTitle: string;
  readonly routePath?: string;
}

export interface SocialItem {
  readonly name: string;
  readonly routePath?: string;
}
