import React , {useState} from 'react';
import Cbutton from './cbutton.js'
 
import './App.css';

function App() {
   
    
    
 
   
  const [feedback, setFeedback] = useState(
    'a dialogbox feedback will come here!'
  );
   return (<div>
   
   <Cbutton  passdata ={ (vv) => { setFeedback(vv)}  }>  </Cbutton> ;
   {feedback}
  </div>)
}

export default App;
