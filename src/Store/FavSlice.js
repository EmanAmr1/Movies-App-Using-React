import { createSlice } from "@reduxjs/toolkit";
import counterReducer from '../Store/CounterSlice'
import { increment, decrement } from '../Store/CounterSlice'
import { useDispatch } from 'react-redux';
import counterSlice from '../Store/CounterSlice';

const INTIAL_STATE = {

    favMovies: [],

}

const favSlice = createSlice({



    name: 'favorites',
    initialState: INTIAL_STATE,

    reducers: {



        addToFav: (state, action) => {

            state.favMovies.push(action.payload);


        },
        removeFromFav: (state, action) => {

            state.favMovies = state.favMovies.filter((mymovie) => mymovie.id !== action.payload);

        }

    }


});

export const {
    addToFav,
    removeFromFav

} = favSlice.actions;


export default favSlice.reducer;