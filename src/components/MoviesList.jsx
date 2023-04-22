import movies from '../services/movies.json';
import { MovieCard } from './MovieCard';

const MoviesList = () => {
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

export { MoviesList };
