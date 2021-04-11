import React from 'react'

const Avatar = (props : any) =>{
    return(
        <React.Fragment>            
                                
            <div id="avatar" className="ltd-avt p-0 m-0 position-fixed">

                <img src={props.avatar} className="rounded-circle ltd-bg5 pt-0 mt-0" alt="Cinque Terre" style={{width: "50px", height: "50px"}}/>

            </div>

        </React.Fragment>
    )
}

export default Avatar