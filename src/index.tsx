import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store'
import App from './component/App'


let containerComp = (
    <Provider store={store}>
        <App name="gaolf"></App>
    </Provider>
)

ReactDOM.render(containerComp, document.getElementById("container"))
