import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Jumbo from "./components/Jumbo";

function App() {
  const [searchFilter, setSearchFilter] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <MyNav setSearchFilter={setSearchFilter} />
      <Jumbo category={category} setCategory={setCategory} />
      <BookList searchFilter={searchFilter} category={category} />
      <MyFooter />
    </>
  );
}

export default App;
