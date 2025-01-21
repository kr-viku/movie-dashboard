import React, { useEffect, useState } from "react";
import { fetchMovies } from "./api/api";
import ChartWidget from "./components/ChartWidget";
import Leaderboard from "./components/Leaderboard";
import FilterPanel from "./components/FilterPanel";
import MovieDetailsCard from "./components/MovieDetailsCard";
import CountryLanguageInsights from "./components/CountryLanguageInsights";
import GenreBarChart from "./components/GenreBarChart";
import Carousel from "./components/Carousel";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedOscarNominations, setSelectedOscarNominations] = useState("");
  const [selectedImdbRating, setSelectedImdbRating] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMovies();
      setMovies(data);
      setFilteredMovies(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    let filtered = movies;

    if (selectedYear) {
      filtered = filtered.filter((movie) => movie.year === selectedYear);
    }
    if (selectedGenre) {
      filtered = filtered.filter((movie) =>
        movie.genre.includes(selectedGenre)
      );
    }
    if (selectedLanguage) {
      filtered = filtered.filter((movie) =>
        movie.language.includes(selectedLanguage)
      );
    }
    if (selectedOscarNominations) {
      filtered = filtered.filter((movie) =>
        movie.oscar_nominations_list.includes(selectedOscarNominations)
      );
    }
    if (selectedImdbRating) {
      filtered = filtered.filter(
        (movie) => movie.imdb_rating === parseFloat(selectedImdbRating)
      );
    }

    setFilteredMovies(filtered);
  }, [
    selectedYear,
    selectedGenre,
    selectedLanguage,
    selectedOscarNominations,
    selectedImdbRating,
    movies,
  ]);

  const resetFilters = () => {
    setSelectedYear("");
    setSelectedGenre("");
    setSelectedLanguage("");
    setSelectedOscarNominations("");
    setSelectedImdbRating("");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-2">Movie Dashboard</h1>
      <Carousel movies={filteredMovies} onMovieSelect={setSelectedMovie} />
      <div className="text-end mt-4">
        <FilterPanel
          years={[...new Set(movies.map((movie) => movie.year))]}
          genres={[...new Set(movies.flatMap((movie) => movie.genre))]}
          languages={[...new Set(movies.flatMap((movie) => movie.language))]}
          oscarNominations={[
            ...new Set(movies.flatMap((movie) => movie.oscar_nominations_list)),
          ]}
          imdbRatings={[...new Set(movies.map((movie) => movie.imdb_rating))]}
          selectedYear={selectedYear}
          selectedGenre={selectedGenre}
          selectedLanguage={selectedLanguage}
          selectedOscarNominations={selectedOscarNominations}
          selectedImdbRating={selectedImdbRating}
          onYearChange={setSelectedYear}
          onGenreChange={setSelectedGenre}
          onLanguageChange={setSelectedLanguage}
          onOscarNominationsChange={setSelectedOscarNominations}
          onImdbRatingChange={setSelectedImdbRating}
          onResetFilters={resetFilters}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 max gap-4">
        <ChartWidget data={filteredMovies} />
        <Leaderboard data={filteredMovies} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <CountryLanguageInsights data={filteredMovies} />
        <GenreBarChart data={filteredMovies} />
      </div>
      {selectedMovie && (
        <MovieDetailsCard
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default App;
