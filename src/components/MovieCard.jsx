import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return <>
        <li className="hover:opacity-80">
            <Link to={`movies/${movie.id}`}>
                <img className="rounded-lg w-full sm:w-[230px] h-auto sm:h-[345px]" src={imgUrl} alt={movie.title} />    
                <p className="text-xl text-white text-center mt-2">{movie.title}</p>
            </Link>
        </li>
    </>
};

export { MovieCard };
