import React , {useState} from 'react';
import Cdialogbox from './Cdialogbox.js'
 
import './App.css';

function App() {
   
    
    
 
   
  const [feedback, setFeedback] = useState(
    ''
  );

  if( !feedback )
  {return (<div>
  
  (<Cdialogbox passnavigationdata ={ (vv) => { setFeedback(vv)}}  todisplay="Hey Are you sure ?">  </Cdialogbox> 
   {feedback})
  </div>) }
  else {return <div></div>}
}

export default App;
