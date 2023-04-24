import movie from '../services/movie.json';

const MovieDetails = () => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return <>
        <main className="flex flex-wrap justify-center h-4/5">
            <section className='max-w-[400px] m-4 border-solid flex justify-end'>
                <img className='rounded-lg h-4/5' src={imgUrl} alt={movie.title} />    
            </section>
            <section className='max-w-[400px] m-4 text-xl border-solid text-white'>
                <p className='font-thin my-1'>
                    <b>Title:</b> {movie.title}
                </p>
                <p className='font-thin my-1'>
                    <b>Genres:</b> 
                    {
                        movie.genres.map(genre => ` ${genre.name}`).join()
                    }
                </p>
                <p className='font-thin my-1'>
                    <b>Description:</b> {movie.overview}
                </p>
            </section>
        </main>
    </>
}

export { MovieDetails };
