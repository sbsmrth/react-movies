import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import { useState } from 'react';
import { useEffect } from 'react';

const MovieDetails = () => {
    const { movId } = useParams();
    const [movie, setMovie] = useState(null);
   
    useEffect(()  => {
        const apiRes = fetchData(`https://api.themoviedb.org/3/movie/${movId}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDZhMGYyMDc5OThmY2M5Y2E5NjU2ZDJjMzA2NWVjMyIsInN1YiI6IjY0NDYwNGQ4YjNmNmY1MDUyNjlmNjc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KING4QgHPEI92ejHPn6zyCYx4JyYsfwxqvQofbWeYI',
                'Content-Type': 'application/json;charset=utf-8'        
            }
        });

        apiRes.then(data => {
            setMovie(data);
        });
    }, [movId]);

    if (!movie){
        return null
    }
    
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return <>
        <main className="flex flex-wrap justify-center border-solid h-[75vh]">
            <img className='rounded-lg h-full  m-4 max-w-[400px]' src={imgUrl} alt={movie.title} />  
            <section className='max-w-[400px] m-4 text-[22px] flex flex-col justify-center text-white'>
                <p className='font-thin my-2'>
                    <b>Title:</b> {movie.title}
                </p>
                <p className='font-thin my-2'>
                    <b>Genres:</b> 
                    {
                        movie.genres.map(genre => ` ${genre.name}`).join()
                    }
                </p>
                <p className='font-thin my-2'>
                    <b>Description:</b> {movie.overview}
                </p>
            </section>
        </main>
    </>
}

export { MovieDetails };
