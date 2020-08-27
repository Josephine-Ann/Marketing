import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addFeature } from './actions/features';
import { addPurchase } from './actions/purchases';
import { setTextFilter } from './actions/filters';
import getVisibleProducts from './selectors/features';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addFeature({ description: 'Coolest socks ever', name: 'Socks', price: 2 }))
store.dispatch(addFeature({ description: 'Coolest t-shirt ever', name: 'T-shirt', price: 2 }))
store.dispatch(addFeature({ description: 'Coolest jeans ever', name: 'Jeans', price: 2 }))
store.dispatch(addPurchase({ price: 2, name: 'jeans', size: 'big', date: 2 }))

store.dispatch(setTextFilter('socks'))
const state = store.getState();
console.log(state);

ReactDOM.render(AppRouter, document.getElementById('app'));

