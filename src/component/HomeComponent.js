import { useEffect, useState } from "react"

function HomeComponent(props) {

    const setFirstNameValue = (event) => {
        setFirstName(event.target.value);
        props.data(event.target.value)
    }

    let [firstName, setFirstName] = useState();
    let [checkboxValue, setCheckBoxValue] = useState(false);

    
   const setCheckboxValue =(event) =>{
    let value = !event.target.checked;
    console.log("eventevent",value)
    setCheckBoxValue(value)
      }
    // useEffect(()=>{
    //     console.log("useEffectuseEffect111111");
    //     fetch('https://dummy.restapiexample.com/api/v1/employees')
    //     .then((response)=>{
    //         console.log("useEffectuseEffect222222",response)

    //     })
    // },[firstName])
    // useEffect(()=>{
    //     fetch('https://dummy.restapiexample.com/api/v1/employees')
    //     .then((response)=>{
    //         console.log("useEffectuseEffect222222",response)

    //     })
    // },[])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            
          });
      }, []);
    return (
        <div>
            This is HomeComponent{firstName} jjjjjj{props.test}
            <input name="firstName" value={firstName} onChange={setFirstNameValue} />
            <input type="checkbox" value={checkboxValue} onChange={setCheckboxValue}/>
        </div>
    )
}

export default HomeComponent