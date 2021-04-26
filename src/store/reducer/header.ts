import * as actionType from '../actionTypes'

const InitState ={
    showAvatarMenu : false,
    financialYear : 1400,
    generalOffice : "دفتر اصلی"
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
        case actionType.GeneralOffice:
            return{
                ...state,
                generalOffice : action.generalOffice
            }
    }
    return state
}

export default headerReducer