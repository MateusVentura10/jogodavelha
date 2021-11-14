import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Content from '../content/Content';

const App = () => {
    return (
        <>
            <Router>
                <Content />
            </Router>
        </>
    )
}

export default App;