import React from 'react'

const Accounts = () =>{

    let fehrest = (
        <li data-id="request_software" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>فهرست</span>
        </li>
    )

    let etelaatePaye = (
        <li data-id="request_list" className="list-group-item list-group-item-action">
            <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>اطلاعات پایه</span>
        </li>
    )

    let hesabha = (
        <li data-id="task_list" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>حساب ها</span>
        </li>
    )

    return(
        <React.Fragment>
             <li data-href="#" data-toggle="collapse" data-target="#ul4-1" className="list-group-item list-group-item-action">
                <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>دفتر کل</span>
            </li>
            <ul id="ul4-1" className="list-group ltd-0radius p-0 collapse">
                {fehrest}
                {etelaatePaye}
                {hesabha}
            </ul>                        
            
        </React.Fragment>
    )
}

export default Accounts