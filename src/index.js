import React from 'react';
import ReactDOM from 'react-dom';

import getRouter from './router/router';

// const initApp = str=>{
//     ReactDOM.render(
//         <p>{str}</p>, 
//         document.getElementById('app')
//     )
// } 

// initApp('你好！');


ReactDOM.render(
    getRouter(), 
    document.getElementById('app')
)