import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useEffect, useState } from "react";

const BookList = props => {
  const [books, setBooks] = useState([]);

  const setBooksArr = async () => {
    let booksArr = [];
    switch (props.category) {
      case "fantasy":
        booksArr = fantasy;
        break;
      case "history":
        booksArr = history;
        break;
      case "horror":
        booksArr = horror;
        break;
      case "romance":
        booksArr = romance;
        break;
      case "scifi":
        booksArr = scifi;
        break;

      default:
        booksArr = [...fantasy, ...history, ...horror, ...romance, ...scifi];
        break;
    }

    booksArr = booksArr.filter(elm => elm.title.toLowerCase().includes(props.searchFilter.toLowerCase()) >= 1);

    setBooks(booksArr);
  };

  useEffect(() => {
    setBooksArr();
    props.setSelected("");
  }, [props.category]);

  useEffect(() => {
    setBooksArr();
  }, [props.searchFilter]);

  return (
    <>
      <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
        {books.map((book, index) => (
          <SingleBook
            book={book}
            key={book.asin + index}
            id={book.asin}
            setSelected={props.setSelected}
            selected={props.selected}
          />
        ))}
      </Row>
    </>
  );
};

export default BookList;
