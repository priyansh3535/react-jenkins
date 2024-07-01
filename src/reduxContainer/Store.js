import { legacy_createStore as createStore } from 'redux';
import bookReducer from "./BookReducers";

const store = createStore(bookReducer)


export default store;