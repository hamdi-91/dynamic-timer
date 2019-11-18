import React from 'react';
// import { stringLiteral } from '@babel/types';

let ms=1000000
const App=()=> { 
  const hours = Math.floor((ms / 3600000) % 24) ;
  const minutes = Math.floor((ms/60000) % 60) ;
  const seconds = Math.floor((ms/1000)%60);
  return (
    <div className="App">  
    <h1>
      {String(hours).padStart(2,"0")} : {String(minutes).padStart(2,"0")} : {String(seconds).padStart(2,"0")}
    </h1>
    </div>
  )
  
}
export default App 

