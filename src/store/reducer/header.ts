import * as actionType from '../actionTypes'

const InitState ={
    showAvatarMenu : false
}

const headerReducer = (state =InitState, action : any) =>{
    switch(action.type){
        case actionType.AvatarMenu:            
            return{
                ...state,
                showAvatarMenu : !state.showAvatarMenu                               
            }
    }
    return state
}

export default headerReducer