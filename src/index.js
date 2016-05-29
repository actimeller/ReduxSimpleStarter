import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAQnx52NnCDicRpHOgK2Mv6HV6Zga9wG8s";

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
};

ReactDOM.render(
    <App />
    , document.querySelector('.container'));
