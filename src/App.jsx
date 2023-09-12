import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Jumbo from "./components/Jumbo";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";

function App() {
  const [searchFilter, setSearchFilter] = useState("");
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <>
      <MyNav setSearchFilter={setSearchFilter} />
      <Jumbo category={category} setCategory={setCategory} />
      <Container>
        <Row>
          <Col>
            <BookList searchFilter={searchFilter} category={category} selected={selected} setSelected={setSelected} />
          </Col>
          <Col sm="3">
            <div className="sticky-top vh-100 overflow-y-scroll">
              {selected ? <CommentArea selected={selected} /> : <h5>Select a book to view comments</h5>}
            </div>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
