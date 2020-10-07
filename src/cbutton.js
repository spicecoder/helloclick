import React from 'react';
 
import './App.css';

 
   
   const Cbutton = (props) => {  
    
 
   const sayHello = (e) => { e.preventDefault();
      
   props.passdata(e.target.innerHTML);
 


}
  
   return (<div><
      button  onClick={sayHello } > Boy Green </button>
      <p>
        <button  onClick={sayHello } > Boy Blue </button>  
      </p>
      </div>
      
      );
  
}

export default Cbutton;
