import * as actions from './RequestActionTypes'

const initState = {
    requests: [],
    loaded: false
}

const RequestReducer = (state = initState, action) => {
    console.log('action: ', action)
    switch(action.type){

        case actions.GET_REQUESTS_PENDING:
            return {
                ...state,
                loaded: false,
            }
        case actions.GET_REQUESTS_FULFILLED:
            return {
                ...state,
                requests: action.payload,
                loaded: true,
            }
        case actions.GET_REQUESTS_REJECTED:
            return {
                ...state,
                loaded: true,
            }

        default: return state
    }
}

export default RequestReducer