import React from 'react';
 
import './App.css';

function App() {
   
    
    
 
   const sayHello = () => {console.log('Hello'); alert("hello")}
  
   return <button  onClick={sayHello } />;
  
}

export default App;
