import React from "react";
import ReactDOM from "react-dom"



function Greeting() {
    return <div><h2>Hello Word Component</h2></div>;
}

// const Greeting = () => {
//     return React.createElement('h1', {}, 'Hello world');
// }

ReactDOM.render(<Greeting />, document.getElementById('root'));