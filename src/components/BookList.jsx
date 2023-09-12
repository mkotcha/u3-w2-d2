import Jumbo from "./Jumbo";
import MyNav from "./MyNav";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useEffect, useState } from "react";

const BookList = props => {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState("");
  const [books, setBooks] = useState([]);

  // const fakeFetch = category => {
  //   setCategory(category);
  // };

  const setBooksArr = async () => {
    let categoryArr = [];
    switch (category) {
      case "fantasy":
        categoryArr = fantasy;
        break;
      case "history":
        categoryArr = history;
        break;
      case "horror":
        categoryArr = horror;
        break;
      case "romance":
        categoryArr = romance;
        break;
      case "scifi":
        categoryArr = scifi;
        break;

      default:
        categoryArr = [...fantasy, ...history, ...horror, ...romance, ...scifi];
        break;
    }

    categoryArr = categoryArr.filter(elm => elm.title.toLowerCase().includes(filter.toLowerCase()) >= 1);

    setBooks(categoryArr);
  };

  const setSearchFilter = searchFilter => {
    setFilter(searchFilter);
    // setBooks();
  };

  const selectBook = id => {
    setSelected(id);
  };

  useEffect(() => {
    setCategory("horror");
  }, []);

  useEffect(() => {
    setBooksArr();
    setSelected("");
  }, [category]);

  useEffect(() => {
    setBooksArr();
  }, [filter]);

  return (
    <>
      <MyNav setSearchFilter={setSearchFilter} />
      <Jumbo setCategory={setCategory} />
      <Container>
        <Row>
          <Col>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
              {books.map((book, index) => (
                <SingleBook
                  book={book}
                  key={book.asin + index}
                  id={book.asin}
                  select={selectBook}
                  selected={selected}
                />
              ))}
            </Row>
          </Col>
          <Col sm="3">
            <div className="sticky-top vh-100 overflow-y-scroll">
              {selected ? <CommentArea selected={selected} /> : <h5>Select a book to view comments</h5>}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;
