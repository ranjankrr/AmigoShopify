import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Shopfiy from './Components/Shopfiy';
import Button from './Components/Button';
import './App.css';
const App =()=>{
  return(
    <>
    <div className='bg-success'>
       <Shopfiy/>
       <Switch>
             <Route exact path='/button/' component={Button}/>
       </Switch>
    </div>
    </>
  )
}
export default App;