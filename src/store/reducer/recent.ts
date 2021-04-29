import * as actionType from '../actionTypes'

interface stateType{
    historyMenus : any,
    ids : any
}

const InitState : stateType ={
    historyMenus  : [],
    ids : []
}

const recentReducer = (state =InitState, action : any) =>{
    switch(action.type){
        case actionType.RecentMenus:
            if(state.historyMenus.indexOf(action.newMenu) === -1){
                state.historyMenus.splice(0,0,action.newMenu)
                state.historyMenus.splice(5)

                state.ids.splice(0,0,action.id)
                state.ids.splice(5)
            }
            return{
                ...state,
                historyMenus : state.historyMenus,
                ids : state.ids
            }
    }
    return state
}

export default recentReducer