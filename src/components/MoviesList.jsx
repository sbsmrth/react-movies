import movies from '../services/movies.json';
import { MovieCard } from './MovieCard';

const MoviesList = () => {
    return <>
        <section>
            <ul>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}
            </ul>
        </section>
    </>
};

export { MoviesList };
