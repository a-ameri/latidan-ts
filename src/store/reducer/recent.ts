import { stat } from 'node:fs'
import * as actionType from '../actionTypes'

interface stateType{
    historyMenus : any,
    ids : any,
    count : number
}

const InitState : stateType ={
    historyMenus  : [],
    ids : [],
    count : 5
}

const recentReducer = (state =InitState, action : any) =>{
    switch(action.type){
        case actionType.RecentMenus:
            if(state.historyMenus.indexOf(action.newMenu) === -1){
                state.historyMenus.splice(0,0,action.newMenu)
                state.historyMenus.splice(state.count)

                state.ids.splice(0,0,action.id)
                state.ids.splice(state.count)
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