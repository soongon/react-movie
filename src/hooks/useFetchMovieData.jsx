import { useEffect, useState } from "react";

export default function useFetchMovieData(movieType) {

  const [movies, setMovies] = useState([]);
  
  const fetchMovieData = async () => {
    let url = '';
    
    if (['now_playing', 'popular', 'top_rated'].includes(movieType)) {
      url = `https://api.themoviedb.org/3/movie/${movieType}?language=ko`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?query=${movieType}&language=ko`
    }
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDM3YTAwN2ZhMmE5MzM1NTdmNWYyMzBlMGYyZTYwZiIsInN1YiI6IjY0OTkzOGVkNmY0M2VjMDBjNWM3MmY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rx-ZZRTbVM_ZeG4dP60TI56W8kUOt5v1pAJNwRaoQaY'
      }
    };
    
    const response = await fetch(url, options)
    const json = await response.json();
    console.log(json.results);
    setMovies(json.results);
  }

  useEffect(() => {
    fetchMovieData();
  }, [movieType]);

  return movies;
}