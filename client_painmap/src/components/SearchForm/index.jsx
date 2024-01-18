import React, { useState } from 'react';

export default function SearchForm ({ handleSearch, lastSearch }) {

    const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput}
             placeholder={lastSearch}
             value={inputValue} required className='search-patient' />
            <input type="submit" value="Search" className='search-patient-btn'/>
        </form>
    )   
};
