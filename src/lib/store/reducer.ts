export interface State {
    searchOpen: {
        isOpen: boolean,
    }
}

export interface Action {
    type: string,
    payload?: any
}


export const initState: State = {
    searchOpen: {
        isOpen: false,
    }
}

const reducer = (state: State = initState, action: Action) => {
    switch (action.type) {
        case 'toggleModal': {
            return {
                ...state,
                searchOpen: {
                    isOpen: action.payload
                }
            }
        }
        default:
            return state;
    }
}

export default reducer;