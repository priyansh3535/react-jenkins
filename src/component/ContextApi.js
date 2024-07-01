import { createContext } from "react";
import ContextApi1 from "./ContextApi1";

const data = createContext();
const data1 = createContext();
function ContextApi(){

    const name = "Jai ram ji ki"
    const name1 = "Jai ram ji ki1"
    return(
        <div>
            <data.Provider value ={name}>
            <data1.Provider value ={name1}>
                <ContextApi1/>
                </data1.Provider>
            </data.Provider>
        </div>
    )
}

export default ContextApi;
export {data,data1};