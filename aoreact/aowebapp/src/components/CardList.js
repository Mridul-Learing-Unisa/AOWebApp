import React, { useState } from 'react';
import Card from "./CardV3";
//import cardData from "../assets/itemData.json"

const CardListNew = () => {

    // 1. useState: Creates a state variable 'cardData' to hold our list.
    //    'setState' is the function we use to update that list.
    //    It starts as an empty array [].
    const [cardData, setState] = useState([]);

    // 2. useEffect: Runs code *after* the component renders.
    //    This is the perfect place to fetch data.
    React.useEffect(() => {
        fetch("http://localhost:5154/api/ItemsWebAPI")
            .then(response => response.json())
            .then(data => setState(data)) // <-- Update state with data from API
            .catch(err => {
                console.log(err);
            });
    }, []); // <-- The empty array [] means this effect runs only ONCE

    return (
        // 'class' from the image was changed to 'className' 
        // which is the correct syntax for React
        <div className="row">
            {/* 3. The .map() function now renders the 'cardData' from state */}
            {cardData.map((obj) => (
                <Card
                    key={obj.itemId}
                    itemId={obj.itemId}
                    itemName={obj.itemName}
                    itemDescription={obj.itemDescription}
                    itemCost={obj.itemCost}
                    itemImage={obj.itemImage}
                />
            ))}
        </div>
    );
}

export default CardListNew;