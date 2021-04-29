import React from 'react'

const BasicInformation = () =>{

    let financialPeriod = (
        <li data-id="financial_period" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>دوره مالی</span>
        </li>
    )

    let generalOffice = (
        <li data-id="general_office" className="list-group-item list-group-item-action">
            <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>دفتر کل</span>
        </li>
    )

    let documentType = (
        <li data-id="document_type" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>نوع سند</span>
        </li>
    )

    return(
        <React.Fragment>
             <li data-href="#" data-toggle="collapse" data-target="#financial_basic" className="list-group-item list-group-item-action">
                <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>اطلاعات پایه</span>
            </li>
            <ul id="financial_basic" className="list-group ltd-0radius p-0 collapse">
                {financialPeriod}
                {generalOffice}
                {documentType}
            </ul>                        
            
        </React.Fragment>
    )
}

export default BasicInformation