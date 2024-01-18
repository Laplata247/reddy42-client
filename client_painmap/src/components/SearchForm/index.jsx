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
             placeholder={lastSearch} role="input" 
             value={inputValue} required/>
            <input type="submit" value="Search"/>
        </form>
    )   
};
