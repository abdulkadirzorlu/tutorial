import ReactDOM from "react-dom"
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
];
const names = ['john', 'peter','susan']
const newNames = names.map((name) => {
    return <h1>{name}</h1>
})
console.log(newNames);
function BookList() {
    return (
        <section className="booklist">
           {newNames}
        </section>
    );
}
const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title }</h1>
            <h4>{author}</h4>
        </article>
    );
};


ReactDOM.render(<BookList />, document.getElementById('root'));