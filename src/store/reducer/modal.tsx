import * as actionType from '../actionTypes'
import {connect} from 'react-redux'

let headerText : string = ""
let bodyElement : JSX.Element = <div />
let onAcceptClick : any = null

const InitState ={
    headerText : headerText,
    bodyElement : bodyElement,
    onAcceptClick : onAcceptClick
}

const modalReducer = (state =InitState, action : any) =>{
    switch(action.type){
        case actionType.PasswordModal:            
            return{
                ...state,
                headerText : "تغییر رمز عبور",
                bodyElement : 
                <div className="row">
                    <div className="col-12">
                        <input id="user_name" type="text" disabled/>                        
                    </div>
                    <div className="col-12">
                        <input id="old_pass" type="password" placeholder="پسورد فعلی"/>                        
                    </div>
                    <div className="col-12">
                        <input id="new_pass" type="password"placeholder="پسورد جدید"/>                        
                    </div>
                    <div className="col-12">
                            <input id="repeat_new_pass" type="password" placeholder="تکرار پسورد جدید"/>                        
                    </div>
                </div>,
                onAcceptClick : () => {},
                type : actionType.PasswordModal
            }
        case actionType.FinancialYearModal:
            return{
                ...state,
                headerText : "انتخاب دوره مالی",
                bodyElement : 
                <div className="row">
                    <div className="col-6">
                        <label>دوره مالی</label>                        
                    </div>
                    <div className="col-6">
                        <div className="ml-3 my-2 input-group-sm">
                            <select className="form-control font-weight-light
                             ltd-IRANSans-regular ltd-0radius" id="FinancialYearBox" name="FinancialYearBox">
                                <option value={1400} selected>1400</option>
                                <option value={1399}>1399</option>
                                <option value={1398}>1398</option>
                            </select>
                        </div>
                    </div>
                </div>,
                onAcceptClick : ()  => {
                    let temp = document.getElementById("FinancialYearBox") as HTMLSelectElement
                    let val = (temp.value as unknown) as number
                    return val                    
                },
                type : actionType.FinancialYearModal
            }
    }
    return state
}

export default (modalReducer)