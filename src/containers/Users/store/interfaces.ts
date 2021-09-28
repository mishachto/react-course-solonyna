export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    eMail: string;
    isActive: boolean;
    avatar: string | null;
    createData?: Date;
}

export interface IUserState {
    error: null | string;
    loading: boolean;
    filter: Object;
    user: IUser | null;
    users: IUser[];
}
