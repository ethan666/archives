import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">六六</Link></li>
                <li><Link to="/page3">爷爷</Link></li>
                <li><Link to="/page2">奶奶</Link></li>
                <li><Link to="/page5">爸爸</Link></li>
                <li><Link to="/page4">妈妈</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page1}/>
                <Route path="/page3" component={Page1}/>
                <Route path="/page4" component={Page1}/>
                <Route path="/page5" component={Page1}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;