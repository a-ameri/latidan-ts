import React from 'react';
import ReactComment from '../../helper/comment';

const Menues = (props : any) => {
    return(
        <React.Fragment>
            <ReactComment text="begin menu" />
            
            <div id="ltd-menu" className=" mt-3 sidebar-obj">
                <ul id="ul1-1" className="list-group thm-0radius p-0">
                    <li data-toggle="collapse" data-target="#ul2-1" data-href="#" className="list-group-item list-group-item-action text-center ">
                        <span>همه صفحات</span>
                    </li>                    
                    <ul id="ul2-1" className="list-group thm-0radius p-0 collapse">
                        <li data-href="#" data-toggle="collapse" data-target="#" className="list-group-item list-group-item-action">
                            <span className="fas fa-exchange fa-size">&nbsp;&nbsp;</span><span>عمومی</span>
                        </li>
                        <li data-href="#" data-toggle="collapse" data-target="#ul3-1" className="list-group-item list-group-item-action">
                            <span className="fas fa-exchange fa-size">&nbsp;&nbsp;</span><span>مالی</span>
                        </li>
                        <ul id="ul3-1" className="list-group thm-0radius p-0 collapse">
                            <li id="request_stuff" className="list-group-item list-group-item-action">                                
                                <span className="fas fa-cart-plus fa-size">&nbsp;&nbsp;</span><span>دارایی</span>                                
                            </li>
                            <li data-href="#" data-toggle="collapse" data-target="#ul4-1" className="list-group-item list-group-item-action">
                                <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>دفتر کل</span>
                            </li>
                            <ul id="ul4-1" className="list-group thm-0radius p-0 collapse">
                                <li id="request_software" className="list-group-item list-group-item-action">
                                    <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>فهرست</span>
                                </li>
                                <li id="request_list" className="list-group-item list-group-item-action">
                                    <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>اطلاعات پایه</span>
                                </li>
                                <li id="task_list" className="list-group-item list-group-item-action">
                                    <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>حساب ها</span>
                                </li>
                            </ul>
                        </ul>
                    </ul> 
                </ul> 
            </div>

            <ReactComment text="end menu" />

        </React.Fragment>
    )
}

export default Menues;