import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router-dom/Router";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux/configureStore";
import routes from "./routes";
import "./styles/index.css";

const store = configureStore();

ReactDOM.render(
	<Provider store={store} key="provider">
		<Router history={history}>{routes}</Router>
	</Provider>,
	document.querySelector("#root")
);

registerServiceWorker();
