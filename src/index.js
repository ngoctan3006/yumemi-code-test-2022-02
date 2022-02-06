import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PrefectureProvider from './contexts/PrefectureContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <PrefectureProvider>
            <App />
        </PrefectureProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
