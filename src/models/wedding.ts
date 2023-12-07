export type Wedding = {
  id: number;
  date: string;
  location: Location;
  groom: Person & { parents: Person[] };
  bride: Person & { parents: Person[] };
  message: {
    intro: string;
    invitation: string;
  };
  galleryImages: string[];
  attendCount: number;
};

export type Location = {
  lat: number;
  lng: number;
  name: string;
  address: string;
  link: string;
  waytocome: {
    metro: string[];
    bus: string[];
  };
};

export type Person = {
  name: string;
  account: Account;
  phoneNumber: string;
};

export type Account = {
  bankName: string;
  accountNumber: string;
  kakaopayLink?: string;
};
