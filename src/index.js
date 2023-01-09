import ReactDOM from "react-dom";
import './index.css';
import Books from "./books";
import Book from "./book";
// setup vars


function BookList() {
    const getBook = (id) => {
        const book = Books.find((book) => book.id === id);
        console.log(book);
    }
   // getBook(2);
    return (
        <section className="booklist">
            {Books.map((book) =>{
            return (
                <Book {...book} key={book.id} getBook={getBook} />
            );
           })}
           
        </section>
    );
}




ReactDOM.render(<BookList />, document.getElementById('root'));