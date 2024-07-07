import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div id='search'>
            <div className='search__inner'>
                <form onSubmit={handleSearch}>
                    <label htmlFor='searchInput'>
                        <span className='ir'>검색</span>
                    </label>
                    <input 
                        type='search' 
                        id='searchInput' 
                        placeholder='🍳검색어를 입력해주세요' 
                        autoComplete='off' 
                        className='search__input' 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
}

export default Search;
