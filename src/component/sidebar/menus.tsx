import React from 'react';
import ReactComment from '../../helper/comment';
import Financial from './menu/financial'
import General  from './menu/general'

const Menues = () => {
    return(
        <React.Fragment>
            <ReactComment text="begin menu" />
            
            <div id="ltd-menu" className=" mt-3 sidebar-obj ltd-IRANSans-light">
                <ul id="ul1-1" className="list-group ltd-0radius p-0">
                    <li data-toggle="collapse" data-target="#ul2-1" data-href="#" className="list-group-item list-group-item-action text-center ">
                        <span>همه صفحات</span>
                    </li>                    
                    <ul id="ul2-1" className="list-group ltd-0radius p-0 collapse">
                        <General />
                        <Financial />
                    </ul> 
                </ul> 
            </div>

            <ReactComment text="end menu" />

        </React.Fragment>
    )
}

export default Menues;