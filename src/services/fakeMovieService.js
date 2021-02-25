import * as genresApi from "./fakeGenreService";

const movies = [
  {
    _id: 1,
    title: "harry potter",

    genre: { _id: 1, name: "fiction" },
    numberInStock: 9,
    dailyRental: 2.5,
    publishDate: 1 - 3 - 2010,
  },
  {
    _id: 2,
    title: "terminator",

    genre: { _id: 2, name: "Action" },
    numberInStock: 8,
    dailyRental: 2.5,
    publishDate: 1 - 3 - 2010,
  },
  {
    _id: 3,
    title: "harry met sajal",

    genre: { _id: 3, name: "comedy" },
    numberInStock: 7,
    dailyRental: 2.5,
    publishDate: 1 - 3 - 2010,
  },

  {
    _id: 4,
    title: "stealth",

    genre: { _id: 4, name: "Action" },
    numberInStock: 7,
    dailyRental: 2.5,
    publishDate: 1 - 3 - 2010,
  },
  {
    _id: 5,
    title: "harry potter2",

    genre: { _id: 5, name: "fiction" },
    numberInStock: 6,
    dailyRental: 2.5,
    publishDate: 1 - 3 - 2016,
  },
  {
    _id: 6,
    title: "a lover boy",

    genre: { _id: 6, name: "romance" },
    numberInStock: 5,
    dailyRental: 2.5,
    publishDate: 1 - 3 - 2010,
  },
  {
    _id: 7,
    title: "wrong turn",

    genre: { _id: 7, name: "Horror" },
    numberInStock: 9,
    dailyRental: 2.5,
    publishDate: 1 - 3 - 2010,
  },
  {
    _id: 8,
    title: "harry potter3",

    genre: { _id: 8, name: "fiction" },
    numberInStock: 9,
    dailyRental: 2.5,
    publishDate: 1 - 3 - 2017,
  },
  {
    _id: 9,
    title: "bay watch",

    genre: { _id: 9, name: "comedy" },
    numberInStock: 9,
    dailyRental: 2.5,
    publishDate: 1 - 3 - 2010,
  },
];

export const getMovies = () => {
  return movies;
};

export const getMovie = (_id) => {
  return movies.find((m) => m._id === _id);
};
