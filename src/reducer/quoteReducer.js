import {generateQuote, fetchQuote} from '../actions/actionCreators'
export const quoteReducer = (state={}, action) => {
    switch(action.type){
        case 'NEW':
            return Object.assign({}, state, {quoteData: action.quoteData});
        case 'FETCH':
            return Object.assign({}, state, {quotes: [...action.quotes]});
        default:
            return state
    }
}