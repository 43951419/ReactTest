import React from "react";
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import Landing from './Landing';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './components/Counter';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <NavLink to="/">Landing</NavLink>
                        <NavLink to="/counter">Counter</NavLink>
                        <main>
                            <Route exact path = "/" component = {Counter} />
                            <Route path = "/counter" component = {Landing} />
                        </main>
                        <footer>footer</footer>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}