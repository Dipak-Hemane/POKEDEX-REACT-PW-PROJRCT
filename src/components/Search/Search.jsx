
import useDebounce from '../hooks/useDebounce';
import './Search.css';

function Search({updatSearchTerm}) {

    const debouncedCallback = useDebounce((e) => updatSearchTerm(e.target.value))
    return (
        <div className='search-wrapper'>
           <input
               id="pokemon-name-wrapper"
               type="text"
               placeholder="pokemon search....."
               onChange={(e) => debouncedCallback(e, '123')}/>
              
        </div>
    );
}

export default Search;