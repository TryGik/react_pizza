import { createSlice } from "@reduxjs/toolkit";

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        items: [],
        isLoaded: false
    },
    reducers: {
        setPizzas: (state, action) => {
            return {
                ...state,
                items: action.payload
            }
        },
    }
});

export const { setPizzas } = pizzasSlice.actions;
export const selectPizzas = state => state.pizzas.items;
export default pizzasSlice.reducer;





//isLoaded значит что идет загрузка и пицци еще не загрузились из БД
// const initialState = {
//     items: [],
//     isLoaded: false
// };

// const pizzas = (state = initialState, action) => {
//     if (action.type === 'SET_PIZZAS') {
//         return {
//             ...state,
//             items: action.payload,

//         };
//     }
//     return state;
// };

// export default pizzas;