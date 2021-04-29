import React from 'react'

const Reports = () =>{

    let accountsReview = (
        <li data-id="accounts_review" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>مرور حساب ها</span>
        </li>
    )

    let balance = (
        <li data-id="balance" className="list-group-item list-group-item-action">
            <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>تراز</span>
        </li>
    )

    let matris = (
        <li data-id="matris" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>ماتریس</span>
        </li>
    )

    let offices = (
        <li data-id="offices" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>دفاتر</span>
        </li>
    )

    let legalOffices = (
        <li data-id="legal_offices" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>دفاتر قانونی</span>
        </li>
    )

    let debtAndCredit = (
        <li data-id="debt_and_credit" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>اعلامیه بدهکار و بستانکار</span>
        </li>
    )

    let foulOfNature = (
        <li data-id="foul_of_nature" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>خلاف ماهیت</span>
        </li>
    )

    let documentReview = (
        <li data-id="document_review" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>مرور اسناد</span>
        </li>
    )

    let analysis = (
        <li data-id="analysis" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>آنالیز</span>
        </li>
    )

    return(
        <React.Fragment>
             <li data-href="#" data-toggle="collapse" data-target="#reports" className="list-group-item list-group-item-action">
                <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>گزارش ها</span>
            </li>
            <ul id="reports" className="list-group ltd-0radius p-0 collapse">
                {accountsReview}
                {balance}
                {matris}
                {offices}
                {legalOffices}
                {debtAndCredit}
                {foulOfNature}
                {documentReview}
                {analysis}
            </ul>                        
            
        </React.Fragment>
    )
}

export default Reports