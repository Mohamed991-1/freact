
import './App.css';
import Nav from'./Nav';
import Food from './Food';
import Data from './data';

const datashow = Data.map(data =><Food img = {data.img} 
description = {data.description}
title = {data.title}
price = {data.price}/>);

function App() {
  return (
    <div className="App">
       <header><Nav /></header> 
       <body>         
        <div className="food-container">
         {datashow}
      </div> 
      </body>

        
        
        
    </div>

  );
}


export default App;
