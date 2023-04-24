import { Link } from "react-router-dom";

const Header = () => {
    return <>
      <header>
        <Link to="/">
          <h1 className="text-center text-3xl my-9 tracking-wider text-white animate-pulse">Movies</h1>
        </Link>
      </header>
    </>
};

export { Header };
