import { counter } from "@fortawesome/fontawesome-svg-core";
import { createSlice } from "@reduxjs/toolkit";

const INTIAL_STATE = {

    count: 0 
};

const counterSlice= createSlice ({
name:'counter',
initialState: INTIAL_STATE,

reducers : {

increment:(state)=>{

    state.count+=1;
},

decrement:(state)=>{

    state.count-=1
}




}



})

export const {increment ,decrement}=counterSlice.actions;

export default counterSlice.reducer;
