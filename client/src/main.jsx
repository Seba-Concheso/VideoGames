import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App></App>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
