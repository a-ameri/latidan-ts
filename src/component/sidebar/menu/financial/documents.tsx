import React from 'react'
import EndPeriodOpration from './documents/endPeriodOpration'

const Documents = () =>{

    let documentsList = (
        <li data-id="documents_list" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>فهرست</span>
        </li>
    )

    let totalDocument = (
        <li data-id="total_document" className="list-group-item list-group-item-action">
            <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>اطلاعات پایه</span>
        </li>
    )

    let check = (
        <li data-id="check" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>بررسی</span>
        </li>
    )

    let moveDocuments = (
        <li data-id="move_documents" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>جابجایی اسناد</span>
        </li>
    )

    let deletedDocuments = (
        <li data-id="deleted_documents" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>اسناد حذف شده</span>
        </li>
    )

    return(
        <React.Fragment>
             <li data-href="#" data-toggle="collapse" data-target="#documents" className="list-group-item list-group-item-action">
                <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>اسناد</span>
            </li>
            <ul id="documents" className="list-group ltd-0radius p-0 collapse">
                {documentsList}
                {totalDocument}
                {check}
                {moveDocuments}
                {deletedDocuments}
                <EndPeriodOpration />
            </ul>                        
            
        </React.Fragment>
    )
}

export default Documents