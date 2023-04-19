const MovieCard = ({ movie }) => {
    const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return <>
        <li>
            <img src={imgUrl} alt={movie.title} />    
            <p>{movie.title}</p>
        </li>
    </>
};

export { MovieCard };
