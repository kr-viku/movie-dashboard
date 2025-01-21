import React from "react";

const FilterPanel = ({
  years,
  genres,
  languages,
  oscarNominations,
  imdbRatings,
  selectedYear,
  selectedGenre,
  selectedLanguage,
  selectedOscarNominations,
  selectedImdbRating,
  onYearChange,
  onGenreChange,
  onLanguageChange,
  onOscarNominationsChange,
  onImdbRatingChange,
  onResetFilters,
}) => {
  return (
    <div className="pb-4 flex flex-wrap justify-between items-center gap-6">
      {/* Year Filter */}
      <div className="flex-1">
        <label className="flex justify-start pl-2 text-sm font-semibold">
          Year
        </label>
        <select
          className="w-full p-2 border rounded"
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Genre Filter */}
      <div className="flex-1">
        <label className="flex justify-start pl-2 text-sm font-semibold">
          Genre
        </label>
        <select
          className="w-full p-2 border rounded"
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Language Filter */}
      <div className="flex-1">
        <label className="flex justify-start pl-2 text-sm font-semibold">
          Language
        </label>
        <select
          className="w-full p-2 border rounded"
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          <option value="">All Languages</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      {/* Oscar Nominations Filter */}
      <div className="flex-1">
        <label className="flex justify-start pl-2 text-sm font-semibold">
          Oscar Nominations
        </label>
        <select
          className="w-full p-2 border rounded"
          value={selectedOscarNominations}
          onChange={(e) => onOscarNominationsChange(e.target.value)}
        >
          <option value="">All Nominations</option>
          {oscarNominations.map((nomination) => (
            <option key={nomination} value={nomination}>
              {nomination}
            </option>
          ))}
        </select>
      </div>

      {/* IMDB Rating Filter */}
      <div className="flex-1">
        <label className="flex justify-start pl-2 text-sm font-semibold">
          IMDB Rating
        </label>
        <select
          className="w-full p-2 border rounded"
          value={selectedImdbRating}
          onChange={(e) => onImdbRatingChange(e.target.value)}
        >
          <option value="">All Ratings</option>
          {imdbRatings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Button */}
      <div className="flex-1">
        <button
          onClick={onResetFilters}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
