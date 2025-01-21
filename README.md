# Movie Dashboard Application

## Overview

This project is a responsive React-based dashboard application that visualizes insights from a movie dataset. It includes features such as filterable movie data, interactive charts, a carousel for top movies, and a modal with detailed movie information.

---

## Features

1. **Search and Filter Panel**:

   - Allows filtering by year, genre, language, IMDb rating, Oscar nominations, and Oscar wins.
   - Includes a reset button to clear all filters.

2. **Oscar Statistics Overview**:

   - Displays a pie chart showing the distribution of Oscar nominations and wins.

3. **Top Performers**:

   - Ranks movies based on their performance (e.g., Oscar wins).

4. **Country and Language Insights**:

   - A pie chart visualizes the count of movies by country and language.

5. **Carousel for Movie Highlights**:

   - Shows top-rated movies with IMDb rating and cast.
   - Allows users to click on a movie card to open a modal with detailed information.

6. **Movie Details Modal**:
   - Displays comprehensive details about the selected movie.

---

## Design Decisions

### 1. **Architecture**

- The project uses a component-based architecture to ensure modularity and reusability.
- Data fetching is centralized, and state management is handled using React's `useState` and `useEffect` hooks.

### 2. **Styling**

- TailwindCSS is used for styling to ensure a consistent and responsive design.
- Utility classes simplify CSS management and reduce code bloat.

### 3. **Charts and Visualizations**

- **Chart.js** is used for creating interactive and visually appealing charts.
- Components are optimized to re-render only when necessary.

### 4. **Carousel and Modal**

- A custom carousel component provides a smooth left-to-right scrolling experience.
- The modal enhances user interaction by dynamically displaying selected movie details.

---

## Trade-offs

### 1. **Data Fetching**

- Chose Axios for simplicity and reliability. Trade-off: Increased bundle size compared to Fetch API.

### 2. **Charts Library**

- Selected Chart.js for its flexibility and community support. Trade-off: Slightly heavier than alternatives like Recharts.

### 3. **State Management**

- Used React's built-in state management instead of Redux or Context API for simplicity. Trade-off: Limited scalability for larger datasets or complex state handling.

---

## Getting Started

### Prerequisites

- Node.js
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Folder Structure

```
src/
  components/
    Carousel.js
    ChartWidget.js
    CountryLanguageInsights.js
    FilterPanel.js
    GenreBarChart.js
    Leaderboard.js
    MovieDetailsCard.js
  api/
    api.js
  App.js
  index.js
```

---

## Future Enhancements

1. Add pagination for large datasets.
2. Implement advanced state management using Redux or Context API.
3. Include more visualizations such as bar charts and heatmaps.
4. Improve accessibility features (e.g., keyboard navigation).

---

## Author

Vikash Kumar
