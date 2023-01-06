import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import favoriteSlice from './favoriteSlice';
import viewSlice from './viewItemSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        viewItem: viewSlice,
        favorite: favoriteSlice
    }
})

export default store;