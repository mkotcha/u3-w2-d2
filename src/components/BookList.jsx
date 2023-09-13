import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useEffect, useState } from "react";

export const BookList = ({ searchFilter, category, selected, setSelected }) => {
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   // setSelected("");
  // }, [category, setSelected]);

  useEffect(() => {
    let booksArr = [];
    switch (category) {
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
    booksArr = booksArr.filter(elm => elm.title.toLowerCase().includes(searchFilter.toLowerCase()) > 0);
    if (booksArr.filter(elm => elm.asin === selected).length === 0) setSelected("");
    setBooks(booksArr);
  }, [searchFilter, category, selected, setSelected]);

  return (
    <>
      <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
        {books.map((book, index) => (
          <SingleBook
            book={book}
            key={book.asin + index}
            id={book.asin}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </Row>
    </>
  );
};

export default BookList;
