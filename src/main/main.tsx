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


const Main = () =>{
    
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

			$(".sidebar-obj > ul > li").addClass("ltd-bg1");

			$(".sidebar-obj > ul > li").addClass("ltd-color5");

			$(".sidebar-obj > ul > ul> li").addClass("ltd-bg5");

			$(".sidebar-obj > ul > ul> ul > li").addClass("ltd-bg6");

			$(".sidebar-obj > ul > ul> ul > ul > li").addClass("ltd-bg3");

			$(".sidebar-obj > ul > ul").addClass("show");

			$(".sidebar-obj > ul > ul> ul > li > span").css("padding-right","10px");

			$(".sidebar-obj > ul > ul> ul > ul > li > span").css("padding-right","20px");

		});
    },[])

    let userfullname : String = "عادل عامری"
    let CompanyName : String = "شرکت پدید آوران امید پارس"
   
    return(        
        <React.Fragment>
            <div className="container-fluid">

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

                    <div id="ltd-main" className="col-sm-10 ltd-mian ltd-bg3 px-0 ">

                        <Flip />

                        <Header userfullname={userfullname} avatar={AvatarPic} />

                        <Contents
                            Paye={Paye}
                            DaftarKol={DaftarKol}
                            Omoomi={Omoomi}
                            Other={Other}
                        />   

                    </div>

                    <ReactComment text='end main'/>

                </div>		

            </div>            
        </React.Fragment>
    )
}

export default Main;