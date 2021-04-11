import React  from 'react'
import Avatar from './avatar'

const AvatarBadge = (props : any) =>{
    return(
        <React.Fragment>
            <div id="avatar-badge" className="ltd-avt badge ltd-bg5 p-2  ltd-header-badge">

                <span>{props.userfullname}</span>

            </div>
        </React.Fragment>
    )
}

export default AvatarBadge