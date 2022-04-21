import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        category: 0,
        sortBy: 'popular'
    },
    reducers: {
        setSortBy: (state, action) => {
            return {
                ...state,
                sortBy: action.payload
            }
        },
        setCategory: (state, action) => {
            return {
                ...state,
                category: action.payload
            }
        },
    }
});

export const { setSortBy, setCategory } = filtersSlice.actions;
export const selectSotBy = state => state.filters.sortBy;
export const selectCategory = state => state.filters.category;
export default filtersSlice.reducer;




/*
// const initialState = {
//     category: 0,
//     sortBy: 'popular'
// }

// const filters = (state = initialState, action) => {
//     if (action.type === 'SET_SORT_BY') {
//         return {
//             ...state,
//             sortBy: action.payload,
//         };
//     }
//     if (action.type === 'SET_CATEGORY') {
//         return {
//             ...state,
//             category: action.payload,
//         };
//     }
//     return state;
// };

// export default filters;
*/