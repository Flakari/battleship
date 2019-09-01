import React, { useState, useEffect } from 'react';
import Grid from './Grid';

function App() {
    const [ID, setID] = useState(0);

    function updateID(id) {
        setID(id);
    }

    return (
        <div>
            <h1>React is working!</h1>
            <Grid updateID={updateID}/>
            <h2>{ID}</h2>
        </div>
    )
}

export default App;
