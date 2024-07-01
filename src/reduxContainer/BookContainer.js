import { useDispatch, useSelector } from "react-redux"
import purchase_book from './BookAction'

function BookContainers(){

   const numberOfBooks = useSelector(state =>state.numberOfBooks);
  const dispatch = useDispatch();
    return (
        <div> 
            BookContainers
            <h2>No Of Books - {numberOfBooks}</h2>
            <button onClick={() => dispatch(purchase_book())}>Buy Book</button>
        </div>
    )
}

export default BookContainers