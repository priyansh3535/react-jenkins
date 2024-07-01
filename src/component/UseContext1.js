import { useContext } from "react";

function UseContextApi1(){

    const name= useContext(data);
    const name1= useContext(data1);
    return(
        <div>
             {name}{name1}
        </div>
        )
}

export default UseContextApi1;