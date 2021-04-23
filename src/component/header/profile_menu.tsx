import * as actionType from '../../store/actionTypes'
import React from 'react'
import {connect} from 'react-redux'

const ProfileMenu = (props : any) =>{
    return(
        <React.Fragment>
            <div id="avatar-menu" className="ltd-bg5 ltd-IRANSans-regular" >
                <ul>
                    <li data-toggle="modal" data-target="#myModal" onClick={props.onAvatarClick}>
                        <span className="fas fa-key fa-size">&nbsp;&nbsp;</span><span>تغییر رمز</span>
                    </li>
                    <li>
                        <span className="fas fa-user-circle fa-size">&nbsp;&nbsp;</span><span>تغییر آواتار</span>
                    </li>
                    {/*<li>
                        <span className="fas fa-globe fa-size">&nbsp;&nbsp;</span><span>تغییر زبان</span>
                    </li>*/}
                    <li onClick={()=>{window.location.href="/"}}>
                        <span className="fas fa-arrow-left fa-size">&nbsp;&nbsp;</span><span>خروج</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onAvatarClick : () => dispatch({type:actionType.PasswordModal})
    }
}

export default connect(null,mapDispatchToProps)(ProfileMenu)