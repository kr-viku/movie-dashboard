import React from "react";

const Leaderboard = ({ data }) => {
  // Sort movies by oscar_winning (desc) and then imdb_rating (desc) as a tiebreaker
  const sortedData = [...data]
    .sort((a, b) => {
      if (b.oscar_winning !== a.oscar_winning) {
        return b.oscar_winning - a.oscar_winning; // Sort by oscar_winning first
      }
      return b.imdb_rating - a.imdb_rating; // Tiebreaker: Sort by imdb_rating
    })
    .slice(0, 5); // Take the top 5 movies

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-2">Top Performers</h2>
      <ul>
        {sortedData.map((item, index) => (
          <li
            key={item.title + index + 1}
            className="flex justify-between py-2"
          >
            <span>{item.title}</span>
            <span>
              {item.oscar_winning} Oscars | {item.imdb_rating} IMDb
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
