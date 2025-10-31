
import React, { useState, useEffect } from 'react';
import Card from './CardV3';

function CardListSearch() {
    const [cardData, setState] = useState([]);

    const [query, setQuery] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5154/api/ItemsWebAPI?searchText=${query}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });
    }, [query]);


    function searchQuery() {

        setQuery(searchText);
    }

    return (
        <div id="cardListSearch">
            <div className="row justify-content-start mb-3">
                <div className="col-3">
                    <input
                        type="text"
                        name="searchText"
                        className="form-control"
                        placeholder="Type your query"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className="col text-left">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={searchQuery}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div id="cardList" className="row">
                {cardData.map((obj) => (
                    <Card key={obj.itemId} {...obj} />
                ))}
            </div>
        </div>
    );
}

export default CardListSearch;