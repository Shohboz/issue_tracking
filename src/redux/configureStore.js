import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const history = createHistory();

let middleware = [];
if (process.env.NODE_ENV !== "production") {
	const createLogger = require("redux-logger").createLogger;
	middleware = [createLogger()];
}

const configureStore = initialState =>
	createStore(
		reducers,
		initialState,
		applyMiddleware(thunkMiddleware, ...middleware)
	);

export { configureStore as default, history };
