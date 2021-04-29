import React, {useEffect} from 'react';
import Header from '../component/header/header'
import ReactComment from '../helper/comment'
import Sidebar from '../component/sidebar/sidebar';
import Flip from '../component/sidebar/flip';
import Contents from '../component/contents/contents'
import './ltd-main.css';
import $ from "jquery";
import Mail from '../images/Menu/mali.png';
import Omoomi from '../images/Menu/omoomi.png';
import Other from '../images/Menu/other.png';
import DaftarKol from '../images/Menu/daftarkol.png'
import Paye from '../images/Menu/paye.png'
import Hesab from '../images/Menu/hesab.png'
import AvatarPic from '../images/avatar.png'
import Modal from '../helper/modal'
import {connect} from 'react-redux'
import * as actionType from '../store/actionTypes'


const Main = (props : any) =>{

    let openTabs : any = [];
    
    useEffect(()=>{
        $("#flip").on('click',(function(){

			if(document.getElementById("ltd-sidebar")!.style.width == "0%")

			{

				document.getElementById("ltd-sidebar")!.style.width = "16.67%";

				document.getElementById("ltd-main")!.style.marginRight = "16.67%";

				document.getElementById("tab-content")!.style.width = "80%";	

				$("#ltd-sidebar").addClass("col-sm-2");

				$("#ltd-main").removeClass("col-sm-12");

				$("#ltd-main").addClass("col-sm-10");

				$("#flip").removeClass("fa-angle-left");

				$("#flip").addClass("fa-angle-right");			

			}

			else

			{

				$("#ltd-sidebar").removeClass("col-sm-2");

				document.getElementById("ltd-sidebar")!.style.width = "0%";

				document.getElementById("ltd-main")!.style.marginRight = "0%";

				document.getElementById("tab-content")!.style.width = "97%";	

				$("#ltd-main").removeClass("col-sm-10");

				$("#ltd-main").addClass("col-sm-12");

				$("#flip").removeClass("fa-angle-right");

				$("#flip").addClass("fa-angle-left");

			}

		}));

		$(function(){

            $(".sidebar-obj > ul > ul li").css("height","40px");

			$(".sidebar-obj > ul > li").addClass("ltd-bg1");

			$(".sidebar-obj > ul > li").addClass("ltd-color5");

			$(".sidebar-obj > ul > ul> li").addClass("ltd-bg5");

			$(".sidebar-obj > ul > ul> ul > li").addClass("ltd-bg6");

			$(".sidebar-obj > ul > ul> ul > ul > li").addClass("ltd-bg4");

			$(".sidebar-obj > ul > ul> ul > ul > ul > li").addClass("ltd-bg2-1");

			$(".sidebar-obj > ul > ul").addClass("show");

			$(".sidebar-obj > ul > ul> ul > li > span.fa-size").css("padding-right","10px");

			$(".sidebar-obj > ul > ul> ul > ul > li > span.fa-size").css("padding-right","15px");

            $(".sidebar-obj > ul > ul> ul > ul > ul > li > span.fa-size").css("padding-right","20px");

            $(".sidebar-obj > ul > ul> ul > ul > ul > li").css("color","black");

		});

        //#region render pages with react
        function RenderTabs($tabName : any, $id_content : any){
            switch($tabName){
                case "request_stuff":
                    //ReactDOM.render(<Request_stuff Save={Save} SaveAdd = {SaveAdd} SaveClose={SaveClose} />, document.getElementById($id_content));
                    break;
            }
        }
        //#endregion

        var removePane = false;
        //#region funcion of active pane
        function activePane($id_inx : any){
            if(openTabs.length == 1)
            return;           
                 
            removePane = true;   
            $(".tab-pane").removeClass("active show");         
            if($id_inx == 0){
                var id_content = openTabs[1];
                $("#" + id_content).addClass("active show");
                $("[data-ltd-href='"+id_content+"']").addClass("active");
            }else{
                var id_content = openTabs[$id_inx - 1];
                $("#" + id_content).addClass("active show");
                $("[data-ltd-href='"+id_content+"']").addClass("active");
            }
        }
        //#endregion
        
        //#region click on side menu and open tabs
        $("#ltd-menu li").on('click',(function(){
            if($(this).attr("data-href") == "#")
            return;                
            
            var id = $(this).attr("data-id");

            let id_content = "div_"+id;
            
            //if tabs exist select opened tab
            if(openTabs.indexOf(id_content) >= 0){
                $(".tab-pane").removeClass("active show");
                $("#"+id_content).addClass("active show");
                $("[data-ltd-href]").removeClass("active");
                $("[data-ltd-href='"+id_content+"']").addClass("active");
                return;
            }

            openTabs.push(id_content);
            $(".nav-link").removeClass("active");

            let htmlName = $(this).text()
            let spanClass = $(this).find(".fa-size").attr("class")
            let allHtml = '<span class="'+spanClass+'">&nbsp;&nbsp;</span><span>'+htmlName+'</span>'
            var menu_title = '<li class="nav-item ltd-bg-tab ltd-IRANSans-light">'+
            '<a data-toggle="tab" data-ltd-href="'+id_content+'" class="nav-link active">'
            +allHtml+'&nbsp;&nbsp;<span class="fa fa-times ltd-close-tab"></span></a></li>';

            //#region add menu to history
            props.onClickMenuToAddHistory(allHtml, id)
            //#endregion

            $(".tab-pane").removeClass("active show");
            $("#addtab").before(menu_title);
            
            $("#tab-content").append("<div id='"+id_content+"' class='tab-pane fade in active show'></div>");

            RenderTabs(id, id_content);

            setRecentMenu();

        }));
        //#endregion

        //#region select recent menu list
        $(document).on("click", "#recent-menu li",(function(){
            if($(this).attr("data-href") == "#")
            return;           

            var id = $(this).attr("data-id");

            let id_content = "div_"+id;
            //if tabs exist select opened tab
            if(openTabs.indexOf(id_content) >= 0){
                $(".tab-pane").removeClass("active show");
                $("#"+id_content).addClass("active show");
                $("[data-ltd-href]").removeClass("active");
                $("[data-ltd-href='"+id_content+"']").addClass("active");
                return;
            }
            
            openTabs.push(id_content);
            $(".nav-link").removeClass("active");

            let htmlName = $(this).text()
            let spanClass = $(this).find(".fa-size").attr("class")
            let allHtml = '<span class="'+spanClass+'">&nbsp;&nbsp;</span><span>'+htmlName+'</span>'
            var menu_title = '<li class="nav-item ltd-bg-tab ltd-IRANSans-light">'+
            '<a data-toggle="tab" data-ltd-href="'+id_content+'" class="nav-link active">'
            +allHtml+'&nbsp;&nbsp;<span class="fa fa-times ltd-close-tab"></span></a></li>';

            //#region add menu to history
            props.onClickMenuToAddHistory(allHtml, id)
            //#endregion

            $(".tab-pane").removeClass("active show");
            $("#addtab").before(menu_title);
            
            $("#tab-content").append("<div id='"+id_content+"' class='tab-pane fade in active show'></div>");

            RenderTabs(id, id_content);
        }))
        //#endregion

        //#region click on x button and close pane
        $(document).on("click", "span.ltd-close-tab" , function() {
            var id_content = $(this).parent().attr('data-ltd-href');
            $(this).parent().parent().remove();
            $("#"+id_content).remove();
            let inx = openTabs.indexOf(id_content);                
            activePane(inx);
            openTabs.splice(inx,1);
        });
        //#endregion

        //#region click on tabs and show pane
        $(document).on("click", "a.nav-link" , function() {
            if(removePane == false)
            {
                $(".tab-pane").removeClass("active show");
                var id_content = $(this).attr("data-ltd-href");
                $("#"+id_content).addClass("active show");
            }			
            removePane = false;
        });
        //#endregion
    },[])

    const setRecentMenu = ()=>{
        let menus : [] = props.menus
        let ids : [] = props.ids
        let beginLi = '<li class="list-group-item list-group-item-action ltd-bg5" style="height : 40px" '
        let endLi = '</li>'
        let allHtml = ''
        menus.forEach((item, index)=>{
            allHtml += beginLi + `data-id="${ids[index]}" >` + item + endLi
        })

        $('#recent-menu-add').empty()
        $('#recent-menu-add').append(allHtml)
    }

    let userfullname : String = "عادل عامری"
    let CompanyName : String = "شرکت پدید آوران امید پارس"    
   
    return(        
        <React.Fragment>
            <div className="container-fluid">
                    <Modal />
                <div className="row">                    
                    <Sidebar 
                        Mail={Mail}
                        Hesab={Hesab}
                        DaftarKol={DaftarKol}
                        Paye={Paye}
                        Omoomi={Omoomi}
                        Other={Other}
                        Company={CompanyName}
                    />
                                        
                    <ReactComment text='begin main'/>

                    <div id="ltd-main" className="col-sm-10 ltd-mian ltd-bg4 px-0 ">

                        <Flip />

                        <Header userfullname={userfullname} avatar={AvatarPic} />

                        <Contents />   

                    </div>

                    <ReactComment text='end main'/>

                </div>		

            </div>            
        </React.Fragment>
    )
}

const mapStateToProps = (state : any) =>{
    return{
        menus : state.recent.historyMenus,
        ids : state.recent.ids
    }
}

const mapDispatchToProps = (dispatch : any) =>{
    return{
        onClickMenuToAddHistory : (menuItem : any, li_id : any) => dispatch({type:actionType.RecentMenus, newMenu : menuItem, id : li_id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);