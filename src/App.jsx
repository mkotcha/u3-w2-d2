import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";

function App() {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <>
      <MyNav setSearchFilter={setSearchFilter} />
      <BookList searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <MyFooter />
    </>
  );
}

export default App;
