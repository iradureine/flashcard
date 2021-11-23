import { configureStore } from "@reduxjs/toolkit";
//import Quizzes from "../features/quizzes/Quizzes";
//import Topics from "../features/topics/Topics";
//import {createStore,combineReducers} from "redux";
import topicReducer from "../features/topics/slicestopics"
import quizzesReducer from "../features/quizzes/sliceQuizes"
import cardsReducer from "../features/cards/sliceCard"
 export default configureStore({
   reducer :{
    topics :topicReducer,
   quizzes :quizzesReducer,
cards :cardsReducer

  },
 });
 //const store= createStore(combineReducers(reducer));