
import React, { useState, useEffect } from 'react';
import Card from './CardV3';

function CardListSearch() {
    // State for the list of items from the API
    const [cardData, setState] = useState([]);

    // State for the *committed* search term (this triggers the API call)
    const [query, setQuery] = useState('');

    // State for what's *currently* in the text box
    const [searchText, setSearchText] = useState('');

    // This useEffect fetches data.
    // It runs on the first load (when query is '')
    // It re-runs *only* when the 'query' state variable changes.
    useEffect(() => {
        // Note: Make sure this URL and port are correct for your API
        fetch(`http://localhost:5154/api/ItemsWebAPI?searchText=${query}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });
    }, [query]); // <-- The dependency array. This is the magic!

    // This function runs when the user clicks the "Search" button
    function searchQuery() {
        // It takes the text from the input box (searchText)
        // and "commits" it as the final query. This triggers the useEffect.
        setQuery(searchText);
    }

    return (
        <div id="cardListSearch">
            {/* --- This is the Search Bar --- */}
            <div className="row justify-content-start mb-3">
                <div className="col-3">
                    <input
                        type="text"
                        name="searchText"
                        className="form-control"
                        placeholder="Type your query"
                        // The input's value is controlled by the searchText state
                        value={searchText}
                        // onChange updates the searchText state on every keystroke
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className="col text-left">
                    <button
                        type="button"
                        className="btn btn-primary"
                        // onClick runs the searchQuery function
                        onClick={searchQuery}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* --- This is the Card List (the "rest of the component") --- */}
            <div id="cardList" className="row">
                {cardData.map((obj) => (
                    // Renders a Card for each item in the cardData state
                    // Uses the spread operator (...) to pass all properties as props
                    <Card key={obj.itemId} {...obj} />
                ))}
            </div>
        </div>
    );
}

export default CardListSearch;