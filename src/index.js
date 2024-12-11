// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./demo/demo";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  const msg = "Hi There!....";

  // if (Math.random > 5)
  // {
  //     msg = "Hey this is Math number";
  // }
  // const date = new Date();
  // const time = date.toLocaleDateString();

  // console.log(date);

  // console.log(time);

  // const name = "Yogesh Rana";
  // const sum = 3 + 3 ;

  return( 
  <div>
  {/* <h1>{new Date().toLocaleDateString()}</h1>
  <h3>{name}</h3>
  <h3>{sum}</h3> */}
  
  <Demo/>
  </div>
 );
}

// 5) Show the component on the screen
root.render(<App />);
