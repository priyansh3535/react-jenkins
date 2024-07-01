import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import  HomeComponent  from './component/HomeComponent'
import useHook from './hook/Hook';
import Hoc from './component/HocComponent'
import RXJSComponent from './component/RXJSComponent'

import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainers from './reduxContainer/BookContainer';
import ContextApi from './component/ContextApi';
import UseContextApi from './component/UseContext';


function App() {

  let [firstName,setFirstName] = useState('Hanuman');
  const[count,increment,decrement] = useHook(); //custom hook

  const test =(name) =>{
    console.log("firstName",firstName)
    setFirstName(name)
  }
  function getData(data){
    console.log("dataAppp",data)
  }
  return (
    <Provider store= {store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jai Shree Ram {firstName}
        </p>
        <button onClick={()=>test('Veer Hanuman ji ki Jay')}>Click</button>
        <HomeComponent test="jai ram ji ki parent" data={getData}/>
        <p>HOC Component</p>
        <Hoc/>

        <h1>RXJSComponent</h1>
        <RXJSComponent/>

        <div>{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </header>
      <BookContainers/>

      <h6>Context Api Create, Provider,Consumer
        <ContextApi/>
        </h6>

        <h6>
          Use ContextApi Create,Provider,UseContext
          <UseContextApi/>
        </h6>
    </div>
    </Provider>
  );
}


export default App;
