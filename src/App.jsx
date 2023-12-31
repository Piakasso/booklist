import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Container from "./layouts/Container/Container";
import SearchWidget from "./layouts/SearchWidget/SearchWidget";
import BooksList from "./features/Books/BooksList/BooksList";
import DetailsBook from "./features/DetailsBook/DetailsBook";

function App() {
  return (
    <Router basename="/booklist">
      <div className="App">
        <Container>
          <SearchWidget />
          <Routes>
            <Route path="/" element={<BooksList />} />
            <Route path="/:slug" element={<DetailsBook />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
