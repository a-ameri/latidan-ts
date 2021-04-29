import React from 'react'
import BasicInformation from './financial/basicInformation'
import Accounts from './financial/accounts'
import Documents from './financial/documents'
import Reports from './financial/reports'

const Financial = () =>{

    let Daraii = (
        <li data-id="request_stuff" className="list-group-item list-group-item-action">                                
            <span className="fas fa-cart-plus fa-size">&nbsp;&nbsp;</span><span>دارایی</span>                                
        </li>
    )

    return(
        <React.Fragment>
            <li data-href="#" data-toggle="collapse" data-target="#financial" className="list-group-item list-group-item-action">
                <span className="fas fa-exchange fa-size">&nbsp;&nbsp;</span><span>مالی</span>
            </li>
            <ul id="financial" className="list-group ltd-0radius p-0 collapse">
                <BasicInformation />
                <Accounts />
                <Documents />
                <Reports />
            </ul>                        
            
        </React.Fragment>
    )
}

export default Financial