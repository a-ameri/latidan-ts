import React from 'react'
import ReactComment from '../../helper/comment'

const Contents = () =>{
    return(
        <React.Fragment>
            <ReactComment text='begin content'/>			

            <div className="ltd-content ltd-color1">
                <ReactComment text='begin tab title'/>
                
                <ul id="tab-title" className="nav nav-tabs ltd-sans-bold border-0" >
                    <li id="close_all">
                        {/* <span className="fas fa-plus-square fa-2x mr-2 mt-2"></span> */}
                        <span className="fas fa-window-close fa-2x mr-2 mt-2"
                        data-toggle="tooltip" data-placement="bottom" title="بستن همه"></span>
                    </li>
                </ul>

                <ReactComment text='end tab title'/>

                <ReactComment text='begin tab contents'/>     

                    <div id="tab-content" className="ltd-tabs tab-content ltd-bg-tab ltd-sans-regular"> 
                    </div>

                <ReactComment text='end tab contents'/>

            </div>

            <ReactComment text='end content'/>

        </React.Fragment>
    )
}

export default Contents