import React from 'react'
import ReactComment from '../../helper/comment'

const Flip = () =>{
    return(
        <React.Fragment>
            <ReactComment text='begin flip'/>

            <div>
                <i id="flip" className="fa fa-angle-right fa-2x pt-2 mt-5 ltd-bg2 position-fixed text-white" ></i>
            </div>

            <ReactComment text='end  flip'/>
            
        </React.Fragment>
    )
}

export default Flip