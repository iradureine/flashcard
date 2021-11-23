import {createSlice} from '@reduxjs/toolkit' 

  const option={
     name: 'cards',
     initialState:{
         cards:{}
     },
     reducers:{

        addCard :( state,action)=>{
        const { id } =action.payload
        state.cards[id] = action.payload
        }
     }

 }

 export const cardSlice = createSlice(option);
 
 export const {addCard} = cardSlice.actions;
 export const selectCard = state => state.cards.cards;
 export default cardSlice.reducer