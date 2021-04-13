import React from 'react'
import ReactComment from '../../helper/comment'
import Menues from './menues'

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

                        <Menues Omoomi={props.Omoomi}/>

                        <ReactComment text='end menu'/>

                    </div>
                </div>
            </div>

            <ReactComment text='end sidebar'/>

        </React.Fragment>
    )
}

export default Sidebar
