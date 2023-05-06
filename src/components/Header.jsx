import { Link } from 'react-router-dom';
import { Search } from '../components/Search';

const Header = () => {
    return <>
      <header>
        <Link to="/">
          <h1 className="text-center text-3xl my-5 tracking-wider text-white animate-pulse">Movies</h1>
        </Link>
        <Search />
      </header>
    </>
};

export { Header };
