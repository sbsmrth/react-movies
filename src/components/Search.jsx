import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');

    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleInputChange = event => {
        const inputVal = event.target.value;
        setSearchParams({ search: inputVal });
    }

    return <>
        <form className="w-[250px] mb-9 mx-auto" onSubmit={handleSubmit}>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative">
                <input type="text" className="block w-full p-1 pl-4 text-sm  border rounded-lg bg-white text-black focus:outline-none
                 placeholder-black" placeholder="Search movies..." onChange={handleInputChange} value={search ?? ''} required />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
        </form>
    </>
};

export { Search };
