import React from 'react';
import ReactDOM from 'react-dom'; 

import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react'		// <<==========
import store from './mobx'				// <<==========

ReactDOM.render(
	<Provider lby={store}>			
		<App/> 
	</Provider>, 
	document.getElementById("root") 
);
registerServiceWorker();
