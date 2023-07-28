import MovieSearchHeading from "./components/MovieSearchHeading.jsx";
import MovieSearchList from "./components/MovieSearchList.jsx";
import MovieSearchFooter from "./components/MovieSearchFooter.jsx";
import { useState } from "react";
import useFetchMovieData from "./hooks/useFetchMovieData.jsx";

function App() {

  const [movieType, setMovieType] = useState('now_playing');
  const movies = useFetchMovieData(movieType);
  
  const handleMovies = (id) => {
    console.log(id);
    setMovieType(id);
  }

  return (
    <>
      <MovieSearchHeading onMovieData={handleMovies}/>
      <MovieSearchList movieList={movies}/>
      <MovieSearchFooter/>
    </>
  )
}

export default App
