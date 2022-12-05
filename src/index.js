import ReactDOM from "react-dom"



function Greeting() {
    return (
        <div>
            <h3>hello people</h3>
            <ul>
                <li>
                    <a href='#'>hello world</a>
                </li>
                <img src='' alt='' />
                <input type='text' name='' id='' />
                I
            </ul>
        </div>
    );
}


ReactDOM.render(<Greeting />, document.getElementById('root'));