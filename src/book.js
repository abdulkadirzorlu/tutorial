import books from "./books";

const Book = (props) => {
    const { id, img, title, author, getBook } = props
    // console.log(props);
    const getSingleBook = () => {
        getBook(id)
    }
    return (
        <article className="book" >
            <img src={img} alt="" />
            <h1>{title}</h1>
            <button onClick={() => getBook(id)}>Click me</button>
            <h4>{author}</h4>
        </article>
    );
};
export default Book;