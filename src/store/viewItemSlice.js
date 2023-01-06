// import {createSlice} from '@reduxjs/toolkit'

// const initialState = [];

// const viewItemSlice = createSlice({
//     name: "viewItem",
//     initialState,
//     reducers: {
//         addViewItem: (state, action) => {
//             // const item = action.payload;
//             // eslint-disable-next-line
//             if(state.length = 0){
//                 state = [];
//                 state.push(action.payload);
//             } else {
//                 state.push(action.payload);
//             }
//         }
//     }
// })

// export const {addViewItem} = viewItemSlice.actions;
// export default viewItemSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const viewItemSlice = createSlice({
  name: 'viewItem',
  initialState: {
    objectArray: []
  },
  reducers: {
    addViewItem: (state, action) => {
      // Remove the previous object from the array
      state.objectArray.splice(0, 1);
      // Add the new object to the array
      state.objectArray.push(action.payload);
    }
  }
});

export const { addViewItem } = viewItemSlice.actions;

export default viewItemSlice.reducer;
