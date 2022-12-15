import ReactDOM from "react-dom"
import './index.css';
// setup vars
const firstBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
}
const secndBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
}
function BookList() {
    return (
        <section className="booklist">
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
            <Book img={secndBook.img} title={secndBook.title} author={secndBook.author} />
        </section>
    );
}
const Book = ({img, title, author}) => {
    // const { img, title, author } = props;
    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title }</h1>
            <h4>{author}</h4>
        </article>
    );
};


ReactDOM.render(<BookList />, document.getElementById('root'));