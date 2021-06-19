import React, { useEffect } from 'react'
import ReactComment from '../../../../helper/comment'

const CostCenter = (props:any) =>{
    useEffect(()=>{
        //#region click on SUB tabs and show pane
        $(document).on("click", "[data-ltd-href^=cost-center]" , function() {            
            var id_content = $(this).attr("data-ltd-href");
            $("[id^=cost-center]").removeClass("in active show");
            $("#"+id_content).addClass("in active show");
        })
        //#endregion
    },[])
    return(
        <React.Fragment>
                
            <ReactComment text="begin action header" />
            <div id="ltd-action" className="ltd-sub row w-100 ltd-bg7">

                <div className="ltd-sub col-12 d-flex justify-content-start w-100 ltd-IRANSans-medium">

                    <div className="ltd-sub badge ">

                        <img src={props.save} alt="save" height="100%"/>

                    </div>

                    <div className="ltd-sub badge  mr-2">

                        <img src={props.saveAdd} alt="save add" height="100%"/>

                    </div>

                    <div className="ltd-sub badge  mr-2">

                        <img src={props.saveClose} alt="save close" height="100%"/>

                    </div>

                </div>

            </div>
            <ReactComment text="end action header" />

            <ReactComment text="begin document content" />
            <div id="ltd-main-content" className="ltd-sub row">

                <ReactComment text="begin tab title" />
                <div className="ltd-sub col-12">

                    <ul className="ltd-sub nav nav-tabs ltd-IRANSans-bold border-0 p-0" >

                        <li className="ltd-sub nav-item ltd-bg-tab" dir="ltr">

                            <a data-toggle="tab" data-ltd-href="cost-center-document" className="ltd-sub nav-link sub-tab-click active"> مرکز هزینه

                            </a>

                        </li>
                        
                        <li className="ltd-sub nav-item ltd-bg-tab" dir="ltr">

                            <a data-toggle="tab" data-ltd-href="cost-center-history" className="ltd-sub nav-link sub-tab-click"> تاریخچه تغییرات

                            </a>

                        </li>
                    </ul>

                </div>
                <ReactComment text="end tab title" />

                <ReactComment text="begin tab content" />
                <div id="ltd-sub-content" className="ltd-sub col-12 ltd-tabs tab-content ltd-IRANSans-regular">

                    <div id="cost-center-document" className="ltd-sub tab-pane fade sub-content-show in active show ">
                        <ReactComment text="begin content header" />
                        <div>
                            <div className="ltd-sub row">
                                <div className="ltd-sub col-md-6">
                                    <label>کد</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-6">
                                    <label>نوع</label>
                                    <select className="ltd-sub ltd-0radius form-control font-weight-light ltd-IRANSans-regular" id="CAID" name="CAID">

                                        <option>حقیقی</option>

                                        <option>حقوقی</option>

                                    </select>
                                </div>
                            </div>
                            <div className="ltd-sub row">
                                <div className="ltd-sub col-md-6">
                                    <label>عنوان</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-6">
                                    <label>وضعیت</label>
                                    <select className="ltd-sub ltd-0radius form-control font-weight-light ltd-IRANSans-regular" id="CAID" name="CAID">

                                        <option>حقیقی</option>

                                        <option>حقوقی</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <ReactComment text="end content header" />

                    </div>

                    <div id="cost-center-history" className="ltd-sub tab-pane fade sub-content-show">

                        123

                    </div>	

                </div>
                <ReactComment text="end tab content" />

            </div>
            <ReactComment text="end document content" />
        </React.Fragment>
    )
}

export default CostCenter
