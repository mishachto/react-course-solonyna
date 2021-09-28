import { Reducer as IReducer } from "redux";
import { userActionTypes, IUserState } from "./index";
import { ACTION_FAILURE_REQUEST } from "@shared/";

const initialstate: IUserState = {
    error: null,
    loading: false,
    filter: {},
    user: null,
    users: []
}

export const usersReducer: IReducer<IUserState> = (state: IUserState = initialstate, action) => {
    switch (action.type) {
        case userActionTypes.FETCH_USERS.REQUEST:
        case userActionTypes.FETCH_USER.REQUEST:
        case userActionTypes.ADD_USER.REQUEST:
        case userActionTypes.EDIT_USER.REQUEST:
        case userActionTypes.REMOVE_USER.REQUEST:
            return { ...state, loading: true };

        case userActionTypes.FETCH_USERS.SUCCESS:
            return { ...state, loading: false, users: action.payload };

        case userActionTypes.FETCH_USER.SUCCESS:
            return { ...state, loading: false, user: action.payload };

        case userActionTypes.ADD_USER.SUCCESS:
            return { ...state, loading: false, users: [...state.users].push(action.payload) };

        case userActionTypes.EDIT_USER.SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users].map((user) => (user.id === action.payload.id ? action.payload : user)),
            };

        case userActionTypes.REMOVE_USER.SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users].filter((user) => user.id !== action.payload)
            };


        case ACTION_FAILURE_REQUEST:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;

    }

}

console.log(usersReducer);
