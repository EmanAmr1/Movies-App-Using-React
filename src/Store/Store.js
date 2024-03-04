import { configureStore } from "@reduxjs/toolkit";
import favreducer from './FavSlice'
import counterReducer from './CounterSlice'

export default configureStore({

    reducer:{

        favorites: favreducer,
        counter: counterReducer,
    },
});

