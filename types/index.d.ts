type TUser = {
  name: string;
  type: string;
  dateCreated: string;
  status: string;
  users: {
    images: string[];
    number?: number;
  };
};
