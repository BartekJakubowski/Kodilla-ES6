import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { getCountries } from './actions/actions-countries';
import DevTools from './DevTools';

render(
	<div>
		<h1>Inicjacja projektu</h1>
		<Provider store={store}>
			<DevTools />
		</Provider>
	</div>,
	document.getElementById('root')
);

store.dispatch(getCountries());
console.log(store.getState());