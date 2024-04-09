import ReactDOM from "react-dom/client";
import React from "react";



const heading = React.createElement(
    "h1",
    {
        id : "heading",
        xyz : 'abc',
    },
    "Hello World from React using separete file"
);

console.log(heading); // will return an object to us
        
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(typeof heading); // an object for us 




/*
    <div id = "parent">
        <div id = "child1">
            <h1> I am h1 tag </h1>
            <h2> I am h2 tag </h2>
        </div>
        <div id = "child2">
            <h1> I am h1 tag </h1>
            <h2> I am h2 tag </h2>
        </div> 
    </div> 
*/

const parent = React.createElement(
    "div",
    {id : "parent"},
    [
        React.createElement("div",{id : "child1"},[
            React.createElement("h1",{},"this is namaste react 😎  "),
            React.createElement("h2",{},"I ANoushkas SIngh h2 tag")
        ]),
        React.createElement("div",{id : "child2"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")
        ])
    ]

); // nesting of the objects
// JSX in the react


console.log(parent);
root.render(parent); // while rendering it converts object into html
