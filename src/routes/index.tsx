import { createBrowserRouter } from 'react-router-dom'
import Home from "@/pages/Home.tsx";
import MovieDetail from "@/pages/MovieDetail.tsx";
import SearchResult from "@/pages/SearchResult.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'movie/:id',
        element: <MovieDetail />,
    },
    {
        path: '/search',
        element: <SearchResult />,
    }

])