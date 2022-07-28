import { userActions } from "../reducers/userReducer";
export const loginAction=(user)=>
{   const userFromLogin={...user,token:1}
    return (dispatch)=>
    {
        dispatch(userActions.login(userFromLogin));

    }
}
export const logoutAction=()=>
{
    return (dispatch)=>
    {
        dispatch(userActions.logout());

    }
}