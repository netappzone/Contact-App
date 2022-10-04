export type Contact = {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {
      number: string;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
  email: string;
  dob: {
    date: string;
  };
  phone: string;
  cell: string;
  id: {
    value: string;
  };
  picture: {
    large: string;
    medium: string;
  };
  nat: string;
};

export type Contacts = {
  results: Contact[];
};
