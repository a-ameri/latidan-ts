import React,{useEffect} from 'react'
import {connect} from 'react-redux'

const Recent = (props : any) =>{

    return(
        <React.Fragment>
            {console.log("from main",props.menus)}
            <div className="mt-3 ltd-font sidebar-obj" style={{right: "10px"}}>
                <ul className="list-group ltd-0radius p-0">
                    <li data-href="#" className="list-group-item list-group-item-action text-center">صفحات به تازگی بازدید شده</li>	
                </ul> 
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state : any) =>{
    return{
        menus : state.recent.historyMenus
    }
}

export default connect(mapStateToProps)(Recent)