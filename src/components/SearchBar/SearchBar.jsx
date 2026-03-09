import { useState } from "react";
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

function SearchBar() {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');
    
    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? 'active' : '';
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleTermChange = (e) => setTerm(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((option) => (
            <li
                key={sortByOptions[option]}
                className={getSortByClass(sortByOptions[option])}
                onClick={() => handleSortByChange(sortByOptions[option])}
            >
                {option}
            </li>
        ));

    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className="SearchBar-fields">
                <input
                    placeholder="Search Businesses"
                    value={term}
                    onChange={handleTermChange}
                />
                <input
                    placeholder="Where?"
                    value={location}
                    onChange={handleLocationChange}
                />
            </div>
            <div className="SearchBar-submit">
                <button onClick={handleSearch}>Let's Go</button>
            </div>
        </div>
    );
};

export default SearchBar;