import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import { MovieCard } from './MovieCard';
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const AllMovies = ({ search }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    useEffect(() => {
        const searchUrl = search ? `${import.meta.env.VITE_TMDB_URL}/search/movie?query=${search}&page=${page}` : `${import.meta.env.VITE_TMDB_URL}/discover/movie?page=${page}` 
        const apiRes = fetchData(searchUrl, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
                'Content-Type': 'application/json;charset=utf-8'        
            }
        });

        apiRes.then(data => {
            setMovies(prevMovies => prevMovies.concat(data.results));
            setHasMore(page < data.total_pages);
        });
    }, [search, page])

    const incrementPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    return <>
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} next={incrementPage} loader={<Spinner />}>
            <div>
                <ul className='grid grid-cols-sm-movies-grid sm:grid-cols-movies-grid gap-10 justify-center p-5'>
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie}></MovieCard>
                    ))}
                </ul>
            </div>
        </InfiniteScroll>
    </>
};

export { AllMovies };
