import {data,data1} from './ContextApi'
function ContextApi1(){


    return(
        <data.Consumer>
            {
                (name)=>{
                    return(
                        // <h1>My Name {name}</h1>
                        <data1.Consumer>
                        {
                            (name1)=>{
                                return(
                                    <h1>My Name {name}{name1}</h1>
                                )
                            }
                        }
                    </data1.Consumer>
                    )
                }
            }
        </data.Consumer>
    )
}

export default ContextApi1