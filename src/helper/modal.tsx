import React from 'react'
import ReactComment from './comment'

const Modal = (props:any)=>{
    return(
        <React.Fragment>
            
            <ReactComment text="begin Modal" />
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                
                <ReactComment text="begin Modal-COntent" />
                <div className="modal-content ltd-bg-tab">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{props.modalHeader}</h4>
                    </div>
                    <div className="modal-body">
                    {props.children}
                    </div>
                    <div className="modal-footer" style={{direction:"ltr"}}>
                    <button type="button" className="btn btn-default ltd-bg5" data-dismiss="modal">انصراف</button>
                    <button type="button" className="btn btn-default ltd-bg5" data-dismiss="modal">تایید</button>
                    </div>
                </div>
                <ReactComment text="end Modal-COntent" />
                
                </div>
            </div>
            <ReactComment text="end Modal" />

        </React.Fragment>       
    )
}

export default Modal