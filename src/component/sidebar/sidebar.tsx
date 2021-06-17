import React from 'react'
import ReactComment from '../../helper/comment'
import Menus from './menus'
import Recent from './recent'

const Sidebar =     (props : any) =>{
    return(
        <React.Fragment>
            <ReactComment text='begin sidebar' />

            <div id="ltd-sidebar" className="col-sm-2  ltd-sidebar ltd-bg2">
                <div className="w-100 d-flex justify-content-center">
                    <div className="row-cols-1 w-100 ltd-IRANSans-medium">
                        <ReactComment text='begin company name' />

                        <div className="w-100 badge ltd-bg5 mt-2 p-2">
                            <span>{props.Company}</span>
                        </div>

                        <ReactComment text='end company name' />

                        <ReactComment text='begin recently' />

                        <Recent />                        

                        <ReactComment text='end recently' />

                        <ReactComment text='begin menu' />

                        <Menus />

                        <ReactComment text='end menu'/>

                    </div>
                </div>
            </div>

            <ReactComment text='end sidebar'/>

        </React.Fragment>
    )
}

export default Sidebar
