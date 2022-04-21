import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";

export default configureStore({
    reducer: {
        filters: filtersReducer,
        pizzas: pizzasReducer,
    },
});









// import { combineReducers } from "redux";
// import filtersReducer from "./filters";
// import pizzasReducer from "./pizzas";

// const rootReducer = combineReducers({
//     filters: filtersReducer,
//     pizzas: pizzasReducer,
// });

// export default rootReducer;