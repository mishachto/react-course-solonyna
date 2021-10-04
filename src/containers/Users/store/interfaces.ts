export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  eMail: string;
  isActive: boolean;
  avatar: string | null;
  createData?: Date;
}

interface IFilterUser {
  search: string;
  order: string;
  sortBy: string;
  limit: number;
  skip: number;
}
export interface IUserState {
  error: null | string;
  loading: boolean;
  filterSettings: IFilterUser;
  user: IUser | null;
  users: IUser[];
}
