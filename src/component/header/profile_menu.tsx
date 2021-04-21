import React from 'react'

const ProfileMenu = () =>{
    return(
        <React.Fragment>
            <div id="avatar-menu" className="ltd-bg5 ltd-IRANSans-regular" >
                <ul>
                    <li>
                        <span className="fas fa-key fa-size">&nbsp;&nbsp;</span><span>تغییر رمز</span>
                    </li>
                    <li>
                        <span className="fas fa-user-circle fa-size">&nbsp;&nbsp;</span><span>تغییر آواتار</span>
                    </li>
                    {/*<li>
                        <span className="fas fa-globe fa-size">&nbsp;&nbsp;</span><span>تغییر زبان</span>
                    </li>*/}
                    <li>
                        <span className="fas fa-arrow-left fa-size">&nbsp;&nbsp;</span><span>خروج</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default ProfileMenu