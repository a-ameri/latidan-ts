import React from 'react'

const EndPeriodOpration = () =>{

    let fixDocuments = (
        <li data-id="fix_documents" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>قطعی کردن اسناد</span>
        </li>
    )

    let numberingDucoments = (
        <li data-id="numbering_ducoments" className="list-group-item list-group-item-action">
            <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>شماره گذاری اسناد</span>
        </li>
    )

    let closingAccountPattern = (
        <li data-id="closing_account_pattern" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>الگوی بستن حساب</span>
        </li>
    )

    let setClosingDocument = (
        <li data-id="set_closing_document" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>صدور سند بستن حساب</span>
        </li>
    )

    let setEndDocument = (
        <li data-id="set_end_document" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>صدور سند اختتامیه</span>
        </li>
    )

    let setBeginDocument = (
        <li data-id="set_begin_document" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>صدور سند افتتاحیه</span>
        </li>
    )

    return(
        <React.Fragment>
             <li data-href="#" data-toggle="collapse" data-target="#end_period_opration" className="list-group-item list-group-item-action">
                <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>عملیات پایان دوره</span>
            </li>
            <ul id="end_period_opration" className="list-group ltd-0radius p-0 collapse">
                {fixDocuments}
                {numberingDucoments}
                {closingAccountPattern}
                {setClosingDocument}
                {setEndDocument}
                {setBeginDocument}
            </ul>                        
            
        </React.Fragment>
    )
}

export default EndPeriodOpration