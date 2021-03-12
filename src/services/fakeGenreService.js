export const genres = [
  { _id: 1, name: "fiction" },
  { _id: 2, name: "Action" },
  { _id: 3, name: "comedy" },
  { _id: 4, name: "Action" },
  { _id: 6, name: "romance" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
