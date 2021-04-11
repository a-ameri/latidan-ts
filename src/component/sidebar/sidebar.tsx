import React from 'react'
import ReactComment from '../../helper/comment'

const Sidebar = (props : any) =>{
    return(
        <React.Fragment>
            <ReactComment text='begin sidebar' />

            <div id="ltd-sidebar" className="col-sm-2  ltd-sidebar ltd-bg2">
                <div className="w-100 d-flex justify-content-center">
                    <div className="row-cols-1 w-100 ltd-IRANSans-medium ltd-color111">
                        <ReactComment text='begin company name' />

                        <div className="w-100 badge ltd-bg5 mt-2 p-2">
                            <span>{props.Company}</span>
                        </div>

                        <ReactComment text='end company name' />

                        <ReactComment text='begin recently' />

                        <div className="mt-3 ltd-font sidebar-obj" style={{right: "10px"}}>
                            <ul className="list-group ltd-0radius p-0">
                                <li data-href="#" className="list-group-item list-group-item-action text-center">صفحات به تازگی بازدید شده</li>	
                            </ul> 
                        </div>

                        <ReactComment text='end recently' />

                        <ReactComment text='begin menu' />

                        <div id="ltd-menu" className=" mt-3 ltd-font sidebar-obj">
                            <ul className="list-group ltd-0radius p-0">
                            <li data-toggle="collapse" data-target="#ul2-1" data-href="#" 
                                    className="list-group-item list-group-item-action text-center ">
                                    <span>همه صفحات</span>
                            </li>
                                <ul id="ul2-1" className="list-group ltd-0radius p-0 collapse">
                                    <li data-href="#" className="list-group-item list-group-item-action">
                                        <span>
                                            <img src={props.Omoomi} alt="Omoomi"/>عمومی
                                        </span>
                                    </li>
                                    <li data-toggle="collapse" data-target="#ul2-2" data-href="#" className="list-group-item list-group-item-action">
                                        <span>
                                            <img src={props.Mail} alt="Mail"/>مالی
                                        </span>
                                    </li>
                                    <ul id="ul2-2" className="list-group ltd-0radius p-0 collapse">
                                        <li data-href="#" className="list-group-item list-group-item-action">
                                            <span><img src={props.Other} alt="Other"/>دارایی
                                            </span>
                                        </li>
                                        <li data-toggle="collapse" data-target="#ul3-2" data-href="#" className="list-group-item list-group-item-action">		<span>
                                            <img src={props.DaftarKol} alt="DaftarKol"/>دفتر کل
                                            </span>
                                        </li>
                                        <ul id="ul3-2" className="list-group ltd-0radius p-0 collapse">
                                            <li data-href="#" className="list-group-item list-group-item-action">
                                                <span>
                                                    <img src={props.Other} alt="Other"/>فهرست
                                                </span>
                                            </li>
                                            <li data-href="#" className="list-group-item list-group-item-action">
                                                <span>
                                                    <img src={props.Paye} alt="Paye"/>اطلاعات پایه
                                                </span>
                                            </li>
                                            <li data-href="#" className="list-group-item list-group-item-action">
                                                <span>
                                                    <img src={props.Hesab} alt="Hesab"/>حساب ها
                                                </span>
                                            </li>
                                        </ul>
                                    </ul>
                                </ul>
                            </ul>
                        </div>

                        <ReactComment text='end menu'/>

                    </div>
                </div>
            </div>

            <ReactComment text='end sidebar'/>

        </React.Fragment>
    )
}

export default Sidebar
