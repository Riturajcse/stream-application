import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate.js';
import StreamDelete from './streams/StreamDelete.js';
import StreamEdit from './streams/StreamEdit.js';
import StreamList from './streams/StreamList.js';
import StreamShow from './streams/StreamShow.js';
import Header from './Header.js';
import history from './../history';

const App = () => {
    return (
         <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList}></Route> 
                        <Route path="/streams/new" component={StreamCreate}></Route>
                        <Route path="/streams/edit/:id" component={StreamEdit}></Route>
                        <Route path="/streams/delete/:id" component={StreamDelete}></Route>
                        <Route path="/streams/:id" component={StreamShow}></Route> 
                    </Switch>
                </div>
            </Router>
         </div>
    );
}

export default App;