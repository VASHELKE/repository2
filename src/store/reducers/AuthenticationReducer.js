const initialState = {
    loggedInUser : null,
    isLoggedIn : false
}

export default function authenticationReducer(state = initialState, action) {

    if (action.type === 'LOGIN_SUCCESS') {        
        return ({
            ...state,
            loggedInUser: action.payload,
            isLoggedIn : true
        })
    }
    if (action.type === 'LOGOUT_SUCCESS') {       
        return ({
            ...state,
            isLoggedIn : false
        })
    }
    
    else {
        return state;
    }
}