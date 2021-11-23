import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/slicestopics";

 const option = {
    name:'quizzes',
    initialState:{
        quizzes:{}
},
        reducers: {
            addQuiz: (state, action) => {
                const { id } = action.payload
                state.quizzes[id] = action.payload
                    }
        }
}
export const thunkaddQuizes = (payload) =>{
    return(dispatch) => {
       dispatch( quizesSlice.actions.addQuiz(payload));
       dispatch( addQuizIdToTopic(
            {
                topicId: payload.topicId,
                quizId: payload.id
          }));
    };
 };
export const quizesSlice=createSlice(option);
export const { addQuiz } = quizesSlice.actions;
export const Selectquizes = state => state.quizzes.quizzes;
export default quizesSlice.reducer;
