import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  return (
    <>
      <MovieCard movie={{ title: "Liams Movie", release_date: "2025" }} />
      <MovieCard movie={{ title: "Interstellar", release_date: "2014" }} />
      <MovieCard movie={{ title: "The Terminator", release_date: "1984" }} />
    </>
  )
}

export default App