import React from 'react'

const Accounts = () =>{

    let accountStructure = (
        <li data-id="account_structure" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>ساختار حساب</span>
        </li>
    )

    let detailType = (
        <li data-id="detail_type" className="list-group-item list-group-item-action">
            <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>نوع تفصیلی</span>
        </li>
    )

    let detailAccount = (
        <li data-id="detail_account" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>حساب تفصیلی</span>
        </li>
    )

    return(
        <React.Fragment>
             <li data-href="#" data-toggle="collapse" data-target="#accounts" className="list-group-item list-group-item-action">
                <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>حساب ها</span>
            </li>
            <ul id="accounts" className="list-group ltd-0radius p-0 collapse">
                {accountStructure}
                {detailType}
                {detailAccount}
            </ul>                        
            
        </React.Fragment>
    )
}

export default Accounts