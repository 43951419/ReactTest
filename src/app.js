import React from 'react';
import ReactDom from 'react-dom';
import Layout from './client/Layout';
import store from './client/store';

const App = ()=>{
    return <Layout />
}

ReactDom.render(<App/>, document.getElementById("app"));
