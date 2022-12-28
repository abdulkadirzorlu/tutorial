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
    return (
        <section className="booklist">
            <EventExamples />
           {books.map((book) =>{
            return (
                <Book {...book} key={book.id}></Book>
            );
           } )}
        </section>
    );
}

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
    }
    const handleButtonClick = () => {
        alert('handle Button');
    }
    const handleFormSubmission = () => {
        console.log('Form submitted');
    }
    return <section>
        <form action="" onSubmit={handleFormSubmission}>
            <h2>Typical Form</h2>
            <input type="text" name="product" onChange={handleFormInput} style={{ margin: '1rem 0'}}/>
        </form>
        <button onClick={handleButtonClick}>click me</button>
    </section>
} 

const Book = (props) => {
    const { img, title, author } = props
    return (
        <article className="book" >
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
};


ReactDOM.render(<BookList />, document.getElementById('root'));