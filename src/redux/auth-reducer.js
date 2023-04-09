const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

let initialState = {
    user: "",
    email: "",
    password: "",
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case UPDATE_EMAIL:
            debugger;
            return {
             ...state,
                email: action.newEmail
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.newPassword
            }
        default:
            return state;
    }
}

// export const setUserData =(email, password) => ({type: SET_USER_DATA, data: {email, password}});
export const updateEmailCreator = (email) => ({
    type: UPDATE_EMAIL,
    newEmail: email
});

export const updatePasswordCreator = (password) => ({
    type: UPDATE_PASSWORD,
    newPassword: password
});

export default authReducer;