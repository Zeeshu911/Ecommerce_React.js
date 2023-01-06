import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // addItem: (state, action )=>{
        //     const addItem = action.payload;
        //     const itemExists = state.find(item => item.id === addItem.id);

        //     if(itemExists){
        //         state.forEach(item => {
        //             if(item.id === addItem.id){
        //                 item.quantiy += 1;
        //         }
        //     })
        //     } else {
        //         state.push(action);
        //     }
        // }
            addItem: (state, action) => {
                const addItem = action.payload;
                const itemExists = state.find((i) => i.id === addItem.id);
          
                if (itemExists) {
                  state.forEach((i) => {
                    if (i.id === addItem.id) {
                      i.quantiy += 1;
                    }
                  });
                } else {
                  state.push(action.payload);
                }
              },
              removeItem(state, action) {
                return state.filter((item) => item.id !== action.payload);
              }
}}
)

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;