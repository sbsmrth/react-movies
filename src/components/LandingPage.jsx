import { Search } from './Search';
import { AllMovies } from './AllMovies';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';

const LandingPage = () => {

    const [query] = useSearchParams();
    const search = query.get('search');

    const debouncedSearch = useDebounce(search, 500);

    return <>
        <section>
            <Search />
            <AllMovies key={debouncedSearch} search={debouncedSearch}></AllMovies>
        </section>
    </>
};

export { LandingPage };
