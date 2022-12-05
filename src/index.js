import ReactDOM from "react-dom"



function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
}
const Person = () => <h2>john doe</h2>;
const Message = () => {
    return <p>this is my message</p>;
};

ReactDOM.render(<Greeting />, document.getElementById('root'));