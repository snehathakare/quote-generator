import {createStore} from 'redux'
import {quoteReducer} from '../reducer/quoteReducer'

export const store = createStore(quoteReducer);
