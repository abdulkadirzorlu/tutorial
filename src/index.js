import ReactDOM from "react-dom";
import './index.css';
// setup vars
const books = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg',
        title: 'I Love You to the Moon and Back',
        author: 'Amelia Hepworth',
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
        title: 'Our Class is a Family',
        author: 'Shannon Olsen',
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/81blQfKsLtL._AC_UL900_SR200,200_.jpg',
        title: 'Fairy Tale',
        author: 'Stephen King',
    },
];

function BookList() {
    return (
        <section className="booklist">
           {books.map((book) =>{
            const { img, title, author } = book;
            console.log(book);
            return (
                <Book book={book}></Book>
            );
           } )}
        </section>
    );
}
const Book = (props) => {
    const { img, title, author } = props.book;
    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title }</h1>
            <h4>{author}</h4>
        </article>
    );
};


ReactDOM.render(<BookList />, document.getElementById('root'));