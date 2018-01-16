//PART 1: Initial State

const initialState = {
    // user: null
    user: {
        uid: 0,
        firstName: '',
        lastName: '',
        // city: '',
        // Country: ''
    }
};

//Part 2: Action type
const LOGIN = 'LOGIN';

//Part 3: Action creator
export const login = (user) => {
    return {
        type: LOGIN, 
        payload: user
    }
}

//Part 4: Reducer
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN: 
        return {...state, user: action.payload};
        default: 
        return state;
    }
};

export default reducer;