import './index.css';

import React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";

// const  Hello = () => {


// }

// // props destructuring
// function Hello({name, age}) {
//   // console.log(props)
//   // const name = props.name;
//   // const age = props.age;
//   // const {name, age} = props;

//   return (
//     <div className="container">
//       <h1>I am {name}, {age} yrs-old!</h1>
//     </div>
//   );
// }

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
