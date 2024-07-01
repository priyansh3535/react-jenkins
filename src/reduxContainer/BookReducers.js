import { buyBook } from './BookTypes'
const initialState ={
    numberOfBooks: 20
}

const BookReducer = (state=initialState,action)=>{

     switch(action.type){
        case buyBook:return {
            ...state, numberOfBooks : state.numberOfBooks -1
        }
        default : return state
     }
}

export default BookReducer;