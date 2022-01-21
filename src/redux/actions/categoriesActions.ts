import { SELECT_AMOUNT, SELECT_CATEGORY, SELECT_DIFFICULTY } from './../constants/categoriesConstants';


export const selectAmount = (num:number) =>{
     return{
 type: SELECT_AMOUNT,
 payload: num
     }
}

export const selectCategory  = (cat:string)=>{
     return{
          type:SELECT_CATEGORY,
          payload: cat,
     }
}

export const selectDifficulty = (diff:string)=>{
     return{
          type:SELECT_DIFFICULTY,
          payload:diff
     }
}