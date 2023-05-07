import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import { MovieCard } from './MovieCard';
import { Spinner } from './Spinner';
import { useSearchParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const AllMovies = ({ search }) => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(0);
    const query = searchParams.get('search');
     
    
    useEffect(() => {
        const searchUrl = query ? `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}` : 'https://api.themoviedb.org/3/discover/movie' 
        const apiRes = fetchData(searchUrl, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDZhMGYyMDc5OThmY2M5Y2E5NjU2ZDJjMzA2NWVjMyIsInN1YiI6IjY0NDYwNGQ4YjNmNmY1MDUyNjlmNjc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KING4QgHPEI92ejHPn6zyCYx4JyYsfwxqvQofbWeYI',
                'Content-Type': 'application/json;charset=utf-8'        
            }
        });

        apiRes.then(data => {
            setMovies(prevMovies => prevMovies.concat(data.results));
        });
    }, [search, page])

    const incrementPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    return <>
        <InfiniteScroll dataLength={movies.length} hasMore={true} next={incrementPage} loader={<Spinner />}>
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
