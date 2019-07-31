import { UserActionTypes } from './user.types.js';

export const setCurretnUser =  (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});