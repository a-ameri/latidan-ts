import * as actionType from '../actionTypes'

const InitState ={
    showAvatarMenu : false,
    financialYear : 1400
}

const headerReducer = (state =InitState, action : any) =>{
    switch(action.type){
        case actionType.AvatarMenu:            
            return{
                ...state,
                showAvatarMenu : !state.showAvatarMenu                               
            }
        case actionType.FinancialYear:
            return{
                ...state,
                financialYear : action.financialYear
            }
    }
    return state
}

export default headerReducer