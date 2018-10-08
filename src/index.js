import React from 'react';
import ReactDOM from 'react-dom';

const initApp = str=>{
    ReactDOM.render(
        <p>{str}</p>, 
        document.getElementById('app')
    )
} 

initApp('你好！');