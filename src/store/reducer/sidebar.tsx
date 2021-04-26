import { stat } from 'node:fs'
import * as actionType from '../actionTypes'

const initState = {
    count : 10,
    recentMenus : [1,2,3,4,5,6,7,8,9,411]
}

const sidebarReducer = (state = initState, action :any)=>{
    switch (action.type) {
        case actionType.RecentMenus:{
            let recent = state.recentMenus
            recent.concat(action.newMenu)
            recent.reverse()
            return{
                ...state,
                recentMenus : recent.slice(0, state.count) 
            }
        }
    }
    return state
}

export default sidebarReducer