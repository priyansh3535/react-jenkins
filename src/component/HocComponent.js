function HocComponent(){

    return(
       <div>
       <HOC cmp={Test} />
       <HOC1 cmp={Test} />
       </div>
    )
}

function HOC(props){

    return <h2 style={{backgroundColor:'red'}}><props.cmp/></h2>
}

function HOC1(props){

    return <h2 style={{backgroundColor:'green'}}><props.cmp/></h2>
}
function Test(){

    return <div>
        <h1> Test Component </h1>
        <button>OK</button>
        </div>
    
}

export default HocComponent;

