import React from 'react'
import Daftarkol from './financial/daftarkol'

const Financial = () =>{

    let Daraii = (
        <li data-id="request_stuff" className="list-group-item list-group-item-action">                                
            <span className="fas fa-cart-plus fa-size">&nbsp;&nbsp;</span><span>دارایی</span>                                
        </li>
    )

    return(
        <React.Fragment>
            <li data-href="#" data-toggle="collapse" data-target="#ul3-1" className="list-group-item list-group-item-action">
                <span className="fas fa-exchange fa-size">&nbsp;&nbsp;</span><span>مالی</span>
            </li>
            <ul id="ul3-1" className="list-group ltd-0radius p-0 collapse">
                {Daraii}
                <Daftarkol />
            </ul>                        
            
        </React.Fragment>
    )
}

export default Financial