import React from 'react'
import ReactComment from '../../helper/comment'

const Contents = (props : any) =>{
    return(
        <React.Fragment>
            <ReactComment text='begin content'/>			

            <div className="ltd-content ltd-color1">
                <ReactComment text='begin tab title'/>
                <ul className="nav nav-tabs ltd-IRANSans-bold border-0" >
                    <li className="nav-item ltd-bg-tab" dir="ltr">
                        <a data-toggle="tab" data-href="#home" className="nav-link active">
                            <span className="fa fa-times ltd-close-tab"></span>&nbsp;&nbsp;اطلاعات پایه 
                            <img src={props.Paye} alt="pic" style={{height: "25px"}}/>
                        </a>
                    </li>
                    <li className="nav-item ltd-bg-tab" dir="ltr">
                        <a data-toggle="tab" data-href="#menu1" className="nav-link">
                            <span className="fa fa-times ltd-close-tab">&nbsp;</span>&nbsp;&nbsp;منوی اول
                            <img src={props.DaftarKol} alt="pic" style={{height: "25px"}}/>
                        </a>
                    </li>
                    <li className="nav-item ltd-bg-tab" dir="ltr">
                        <a data-toggle="tab" data-href="#menu2" className="nav-link">
                            <span className="fa fa-times ltd-close-tab">&nbsp;</span>&nbsp;&nbsp;منوی دوم
                            <img src={props.Omoomi} alt="pic" style={{height: "25px"}}/>
                        </a>
                    </li>
                    <li className="nav-item ltd-bg-tab" dir="ltr">
                        <a data-toggle="tab" data-href="#menu3" className="nav-link">
                            <span className="fa fa-times ltd-close-tab">&nbsp;</span>&nbsp;&nbsp;منوی سوم
                            <img src={props.Other} alt="pic" style={{height: "25px"}}/>
                        </a>
                    </li>
                    <li id="addtab">
                        <span className="fas fa-plus-square fa-2x mr-2 mt-2"></span>
                    </li>
                </ul>

                <ReactComment text='end tab title'/>

                <ReactComment text='begin tab content'/>

                <div id="tab-content" className="ltd-tabs tab-content ltd-bg-tab ltd-IRANSans-regular">
                    <div id="home" className="tab-pane fade in active show">                        
                        {/* <iframe src="add-document.html" title="add document" className="ltd-iframe"></iframe> */}                        
                    </div>
                    <div id="menu1" className="tab-pane fade h-75 w-75">
                        {/* <iframe src="accounts.html" title="accounts" className="ltd-iframe"></iframe> */}
                    </div>
                    <div id="menu2" className="tab-pane fade">
                        <h3>Menu 2</h3>
                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div id="menu3" className="tab-pane fade">
                    <h3>Menu 3</h3>
                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>

                <ReactComment text='end tab content'/>

            </div>

            <ReactComment text='end content'/>

        </React.Fragment>
    )
}

export default Contents