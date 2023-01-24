import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import cartReducer from "./ducks/cart";
import productsReducer from "./ducks/products";
import App from "./App";
import productsData from "./data/products";
import "bootstrap/dist/css/bootstrap.css";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

let store = createStore(rootReducer, {
  products: productsData, // initial store values
});

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);