import React from 'react'
import ReactComment from './comment'
import ModalButton from './modalButton'
import {connect} from 'react-redux'

const Modal = (props:any)=>{
    return(
        <React.Fragment>
            
            <ReactComment text="begin Modal" />
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                
                <ReactComment text="begin Modal-COntent" />
                <div className="modal-content ltd-bg-tab">
                    <div className="modal-header" >
                    <h4 className="modal-title ltd-IRANSans-bold">{props.headerText}</h4>
                    <button type="button" className="close position-absolute" data-dismiss="modal" style={{left:"0"}}>&times;</button>
                    </div>
                    <div className="modal-body ltd-IRANSans-medium">
                    {props.bodyElement}
                    </div>
                    <div className="modal-footer" style={{direction:"ltr"}}>
                    <button type="button" className="btn btn-default ltd-bg5" data-dismiss="modal">انصراف</button>
                    <ModalButton onClick={props.onAcceptClick} type={props.type}/>
                    </div>
                </div>
                <ReactComment text="end Modal-COntent" />
                
                </div>
            </div>
            <ReactComment text="end Modal" />

        </React.Fragment>       
    )
}

const mapStateToProps = (state : any) => {    
    return {
        headerText : state.modal.headerText,
        bodyElement : state.modal.bodyElement,
        onAcceptClick  : state.modal.onAcceptClick,
        type: state.modal.type
    };
};

export default connect(mapStateToProps)(Modal)