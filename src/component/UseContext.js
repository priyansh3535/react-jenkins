import { createContext } from "react";

const data = createContext();
const data1 = createContext();
function UseContextApi(){

    const name = "Jai ram ji ki"
    const name1 = "Jai ram ji ki1"
    return(
        <div>
            <data.Provider value ={name}>
            <data1.Provider value ={name1}>
                <UseContextApi/>
                </data1.Provider>
            </data.Provider>
        </div>
    )
}

export default UseContextApi;
export {data,data1};