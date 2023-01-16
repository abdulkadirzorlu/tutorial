import books from "./books";

const Book = (props) => {
    const { id, img, title, author, number } = props
    console.log(number)
    return (
        <article className="book" >
            <img className="img" src={img} alt={title} />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <span className="number">#{ number + 1 }</span>
        </article>
    );
};
export default Book;