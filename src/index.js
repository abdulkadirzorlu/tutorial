import ReactDOM from "react-dom";
import './index.css';
import Books from "./books";
import Book from "./book";
// setup vars


function BookList() {
    return (
        <>
            <h1 className="indexTitle">Amazon Best Sellers</h1>
        <section className="booklist">
            {Books.map((book, index) =>{
                return (
                    <Book {...book} key={book.id} number={index} />
                );
            })}
            </section>
        </>
    );
}




ReactDOM.render(<BookList />, document.getElementById('root'));