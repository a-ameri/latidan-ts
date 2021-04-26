import * as actionType from '../actionTypes'

interface stateType{
    historyMenus : any
}

const InitState : stateType ={
    historyMenus  : [] 
}

const recentReducer = (state =InitState, action : any) =>{
    switch(action.type){
        case actionType.RecentMenus:
            console.log(state.historyMenus)
            if(state.historyMenus.indexOf(action.newMenu) === -1){
                state.historyMenus.splice(0,0,action.newMenu)
                state.historyMenus.splice(10)
            }
            return{
                ...state,
                historyMenus : state.historyMenus
            }
    }
    return state
}

export default recentReducer