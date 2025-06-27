import {MovieCard} from "@/components/MovieCard.tsx";

const dummyMovies = [
    {
        id: 1,
        title: "듄: 파트2",
        posterPath: "/8uVKfOJUhmybNsVh089EqLHUYEG.jpg",
    },
    {
        id: 2,
        title: "가디언즈 오브 갤럭시",
        posterPath: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    },
]

export default function Home() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4"> 인기 영화</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {dummyMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.posterPath}/>
                ))}
            </div>
        </div>
    );
}