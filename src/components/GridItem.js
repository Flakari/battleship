import React from 'react';

function GridItem({ coord, id, displayID }) {
    return (
        <div data-id={id} onMouseEnter={displayID}>
            <p data-id={id} onMouseEnter={displayID}>{`${coord.x}, ${coord.y}`}</p>
        </div>
    )
}

export default GridItem;
