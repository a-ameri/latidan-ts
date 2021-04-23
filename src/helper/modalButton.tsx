import React from 'react'
import {connect} from 'react-redux'
import * as actionType from '../store/actionTypes'

const ModalButton = (props: any) =>{    
    let chaneFinancialyear = () =>{
        let year : number = props.onClick()
        props.onChangeFinancialYear(year)
    }
    switch (props.type) {
        case actionType.FinancialYearModal:
            return(
                <React.Fragment>            
                    <button type="button" className="btn btn-default ltd-bg5"
                        data-dismiss="modal" onClick={chaneFinancialyear}>تایید
                    </button>
                </React.Fragment>
            )
    }
    return(
        <React.Fragment>            
            <button type="button" className="btn btn-default ltd-bg5"
                data-dismiss="modal">تایید
            </button>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onChangeFinancialYear : (val : number) => dispatch({type:actionType.FinancialYear, financialYear : val})
    }
}

export default connect(null,mapDispatchToProps)(ModalButton)