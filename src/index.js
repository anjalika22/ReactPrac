import React from 'react';
import ReactDOM from  'react-dom';
 
const head="Heading";
const fname="Template Literal";


ReactDOM.render(
<>
<h1> {head + " " +fname}</h1> 
<h2>My name is {fname} {head}</h2>
<h2>Javascript Expression {Math.random()}</h2> 
<p>my lucky number is {2+3} </p>
  <ol>
    <li>Dark</li>
    <li>stranger</li>
  </ol>
  </>,document.getElementById("root")
  );