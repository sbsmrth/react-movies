import { Suspense, useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import { MovieCard } from './MovieCard';
import { Spinner } from './Spinner';

const apiRes = fetchData('https://api.themoviedb.org/3/discover/movie', {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDZhMGYyMDc5OThmY2M5Y2E5NjU2ZDJjMzA2NWVjMyIsInN1YiI6IjY0NDYwNGQ4YjNmNmY1MDUyNjlmNjc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KING4QgHPEI92ejHPn6zyCYx4JyYsfwxqvQofbWeYI',
        'Content-Type': 'application/json;charset=utf-8'        
    }
});

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        apiRes.then(data => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, [])


    if (isLoading) {
        return <Spinner></Spinner>;
    }

    return <>
        <section>
            <ul className='grid grid-cols-sm-movies-grid sm:grid-cols-movies-grid gap-10 justify-center p-5'>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}
            </ul>
        </section>
    </>
};

export { AllMovies };
