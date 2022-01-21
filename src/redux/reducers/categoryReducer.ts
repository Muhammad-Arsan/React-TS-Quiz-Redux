import { Category } from './../../Data/Category';
import { SELECT_AMOUNT, SELECT_CATEGORY, SELECT_DIFFICULTY } from './../constants/categoriesConstants';


const initialState = {
     amount:10,
     category:'General Knowledge',
     difficulty:'easy'
}
const categoryReducer = (state=initialState , action:any)=>{
switch(action.type){
     case SELECT_AMOUNT:{
          return{
               ...state,
               amount:action.payload
          }
     }
     case SELECT_CATEGORY:{
          return{
               ...state,
               category:action.payload,
          }
     }
     case SELECT_DIFFICULTY:{
          return{
               ...state,
               difficulty:action.payload
          }
     }
     default :
     return state;
}


}

export default categoryReducer;