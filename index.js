import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

function App(){
  const [name,setName] = useState({firstname:'',lastname:''})
  return( <div>
    <input type="text" onChange={(event)=> setName({ ...name,firstname:event.target.value})}/>
    <input type="text" onChange={(event)=> setName({...name,lastname:event.target.value})}/>
    <p> first name is {name.firstname}</p>
    <p> last name is {name.lastname}</p>
    </div>
  )
}

render(<App />, document.getElementById('root'));
