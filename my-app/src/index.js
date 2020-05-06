import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'; //npm install react-router-dom
import * as serviceWorker from './serviceWorker';
//Redux
import {applyMiddleware, createStore} from 'redux'; //npm install redux
import {Provider} from 'react-redux'; //npm install react-redux
import mainReducer from "./redux/reducers/mainReducer";
import reduxThunk from 'redux-thunk'; //npm install redux-thunk

//Создание store
const store = createStore(mainReducer, applyMiddleware(
    reduxThunk
));

const app = (
    <Provider store={store}> {/*Provider необходим для импорта store*/}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
