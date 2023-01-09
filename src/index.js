import ReactDOM from "react-dom";
import './index.css';
// setup vars
const books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg',
        title: 'I Love You to the Moon and Back',
        author: 'Amelia Hepworth',
    },
    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
        title: 'Our Class is a Family',
        author: 'Shannon Olsen',
    },
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/81blQfKsLtL._AC_UL900_SR200,200_.jpg',
        title: 'Fairy Tale',
        author: 'Stephen King',
    },
];

function BookList() {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book);
    }
    getBook(2);
    return (
        <section className="booklist">
           {books.map((book) =>{
            return (
                <Book {...book} key={book.id} getBook={getBook} />
            );
           })}
           
        </section>
    );
}



const Book = (props) => {
    const { id, img, title, author, getBook } = props
    // console.log(props);
    return (
        <article className="book" >
            <img src={img} alt="" />
            <h1>{title}</h1>
            <button onClick={getBook(id)}>Click me</button>
            <h4>{author}</h4>
        </article>
    );
};

ReactDOM.render(<BookList />, document.getElementById('root'));