import MovieCard from "./MovieCard";

export default function MovieSearchList({movieList}) {
    return (
      <main className="dark:bg-slate-700">
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap">
            {
              movieList.map(movie => <MovieCard movie={movie} key={movie.id}/>)
            }
          </div>
        </section>
      </main>
    );
}