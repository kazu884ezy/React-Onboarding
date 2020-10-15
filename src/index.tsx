import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import App from "./App";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const theme = createMuiTheme({
    spacing: 3,
    palette: {
        primary: {
            main: "#28f8d9",
        },
        secondary: {
            main: "#f66d37"
        }
    }
});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <App />
          </ThemeProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
