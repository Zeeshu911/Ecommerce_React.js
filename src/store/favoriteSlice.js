import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const favoriteProduct = action.payload;
            const isExists = state.find((i) => i.id === favoriteProduct.id);

            if (!isExists) {
                state.push(action.payload);
              } else {
                alert("Item already exists");
              }
            }
        }
    }
)

export const {addFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;