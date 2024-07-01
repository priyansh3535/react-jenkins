import { useState } from "react";


function useHook(){

    const[count, setCount] = useState(10);

    function increment(){
      setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }

    return [count,increment,decrement]
}

export default useHook;