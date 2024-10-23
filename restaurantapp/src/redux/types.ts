export interface Restaurant {
  id: number;
  name: string;
  internalName: string;
  address1: string;
  address2?: string | null;
  address3?: string | null;
  city: string;
  county: string;
  country: string;
  postcode: string;
  ccy: string;
  ccySymbol: string;
  demoFlag: number;
  description?: string | null;
  liveFlag: number;
  locale: string;
  timeZone: string;
  timezoneOffset: string;
  webSettings: {
    backgroundColour: string;
    bannerImage: string;
    navBackgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    venueId: number;
  };
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  alcoholic: number;
  availabilityType: string;
  available: boolean;
  sku: string;
  option: string;
  images?: Image[];
  totalPrice: number;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description?: string;
  alcoholic: number;
  availabilityType: string;
  available: boolean;
  sku: string;
  totalPrice: number;
  images?: Image[];
}

export interface Image {
  id: number;
  image: string;
}

export interface MenuSection {
  id: number;
  name: string;
  description?: string | null;
  position: number;
  visible: number;
  images?: Image[];
  items: MenuItem[];
}

export interface Menu {
  id: number;
  name: string;
  sections: MenuSection[];
}

export interface RestaurantState {
  restaurant: Restaurant | null;
  menu: Menu | null;
  loading: boolean;
}

export interface CartState {
  items: { id: number; name: string; totalPrice: number; quantity: number }[];
}

export interface InitialState {
  restaurant: {
    loading: boolean;
    menu: Menu | null;
  };
  cart: CartState;
}
