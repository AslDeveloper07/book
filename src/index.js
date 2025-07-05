import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const API = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/81TP4P8RDWL._SY466_.jpg",
    author: " Robert Galbraith",
    title: "The Fighting Bunch",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/81sA41R62UL._SY466_.jpg",
    author: " Rebecca Yarros",
    title: "An Inside Job",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/51AGsQ7Q+VL._SY445_SX342_.jpg",
    author: " Karla Sorensen",
    title: "Troubled Blood",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/51YEkiDk+aL._SY445_SX342_.jpg",
    author: " Michelle Heard",
    title: "Death (Mafia Empire Book 3",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/51pPUZJcj5S._SY445_SX342_.jpg",
    author: " Robert Galbraith",
    title: "The Fighting Bunch",
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/91S6JMLcDfL._SY466_.jpg",
    author: " Rebecca Yarros",
    title: "An Inside Job",
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/514eMlhuxUL._SY445_SX342_.jpg",
    author: " Karla Sorensen",
    title: "Troubled Blood",
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/71yfI1pxj+L._SY466_.jpg",
    author: " Michelle Heard",
    title: "Death (Mafia Empire Book 3",
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/51ljJ3vklVL._SY445_SX342_.jpg",
    author: " Karla Sorensen",
    title: "Troubled Blood",
  },
];

const BookList = ({ author, title, image }) => {
  return (
    <section className="bookList">
      <img src={image} alt={title} />
      <div className="text">
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
    </section>
  );
};

const Book = () => {
  return (
    <article className="book container">
      {API.map((book) => (
        <BookList
          author={book.author}
          title={book.title}
          image={book.image}
          key={book.id}
        />
      ))}
    </article>
  );
};

const Main = () => {
  return (
    <>
      <Book />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
