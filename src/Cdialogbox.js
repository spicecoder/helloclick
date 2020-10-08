import React from 'react';
 
import './App.css';

 
   
   const Cdialogbox = (props) => {  
    
 
   const feedbackfunction  = (e) => { e.preventDefault();
      
   props.passnavigationdata(e.target.innerHTML);
 


}
  
   return (<div>
      {props.todisplay}
      <button  onClick={feedbackfunction} > YES </button>
      <p>
        <button  onClick={feedbackfunction } > NO </button>  
      </p>
      </div>
      
      );
  
}

export default Cdialogbox;


/*
Example of using Cdialogbox :
   
 
   
  const [feedback, setFeedback] = useState(
    ''
  );

  if( !feedback )
  {return (<div>
  {props.display}
  (<Cdialogbox passnavigationdata ={ (vv) => { setFeedback(vv)}  }>  </Cdialogbox> ;
   {feedback})
  </div>) }
  else {return <div></div>}
}






*/
