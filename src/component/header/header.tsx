import React from 'react'
import Avatar from './avatar'
import AvatarBadge from './avatar_badge'
import ReactComment from '../../helper/comment'
import ProfileMenu from './profile_menu'
import {connect} from 'react-redux'
import * as actionType from '../../store/actionTypes'

const Header = (props : any) =>{

    let profileMenu = <ProfileMenu />

    return(
        <React.Fragment>

            <ReactComment text='begin header'/>
                <div className="row mr-0 mt-2 ltd-color1" >

                    <div className="col-sm-4 d-flex justify-content-start ltd-IRANSans-medium">

                        <div className="mr-0">

                            <span id="preferences" className="fa fa-ellipsis-v fa-2x ltd-icon"></span>

                        </div>

                        <div className="badge ltd-bg5 p-2 mr-2 ltd-header-badge">

                            <span>1399/10/17</span>

                        </div>

                        <div className="badge ltd-bg5 p-2 mr-2 ltd-header-badge" 
                        data-toggle="modal" data-target="#myModal" onClick={props.onGeneralClick}>

                            <span>دفتر کل : {props.generalOffice}</span>

                        </div>

                        <div className="badge ltd-bg5 p-2 mr-2 ltd-header-badge"
                        data-toggle="modal" data-target="#myModal" onClick={props.onFinancialClick}>

                            <span>دوره مالی : {props.financialYear}</span>

                        </div>

                    </div>

                    <div className="col-sm-4 ltd-IRANSans-light" >

                        <div className="input-group">

                            <div className="input-group-prepend">

                                <span id="srchic" className="input-group-text fa fa-search ltd-bg5 border-0"></span>

                            </div>

                            <input id="srchbx" type="text" className="border-0 ltd-bg5 w-75"/>

                        </div>

                    </div>

                    <div className="col-sm-4 d-flex justify-content-end ltd-IRANSans-medium" >

                        <div>

                            <span className="far fa-question-circle fa-2x ml-2 ltd-icon" aria-hidden="true"></span>

                        </div>

                        <div>

                            <span className="far fa-cog fa-2x ml-2 ltd-icon" aria-hidden="true"></span>

                        </div>

                        <div>

                            <span className="far fa-bell fa-2x ml-2 ltd-icon" aria-hidden="true"></span>

                        </div>
                        
                        <AvatarBadge userfullname = {props.userfullname} onClickHandler = {props.onAvatarClick}/>

                        {props.showAvatarMenu ? profileMenu : null}
                        
                    </div>	
                    
                    <Avatar avatar = {props.avatar} onClickHandler = {props.onAvatarClick}/>

                </div>

            <ReactComment text='end header'/>
        </React.Fragment>
    )
}

const mapStateToProps = (state : any) => {
    return {
        showAvatarMenu : state.header.showAvatarMenu,
        financialYear : state.header.financialYear,
        generalOffice : state.header.generalOffice
    };
};

const mapDispatchToProps =(dispatch  : any) =>{
    return{
        onAvatarClick : () => dispatch({type:actionType.AvatarMenu}),
        onFinancialClick : () => dispatch({type:actionType.FinancialYearModal}),
        onGeneralClick : () => dispatch({type:actionType.GeneralOfficeModal})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)