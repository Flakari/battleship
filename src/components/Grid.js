import React, { useState, useEffect } from 'react';
import GridItem from './GridItem';

function Grid({ updateID }) {
    const [gridItems, setGridItems] = useState([]);

    useEffect(() => {
        const temp = [];
        let id = 0;
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                temp.push(
                    <GridItem 
                        key={id} 
                        id={id} 
                        coord={{x: i, y: j}}
                        displayID={displayID}
                    />
                );
                id += 1;
            }
        }
        setGridItems(temp);
    }, [])

    function displayID(event) {
        updateID(event.target.getAttribute('data-id'))
    }

    return (
        <div id="main-grid" style={{
            width: '500px',
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)'}}>
            { gridItems }
        </div>
    )
}

export default Grid;
