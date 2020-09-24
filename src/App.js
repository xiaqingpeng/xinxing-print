import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AppRouter from './router/Router';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }
}

export default App
