import React, { useEffect } from 'react'
import ReactComment from '../../../../helper/comment'

const PersonAndCompany = (props:any) =>{
    useEffect(()=>{
        //#region click on SUB tabs and show pane
        $(document).on("click", "[data-ltd-href^=p-and-c]" , function() {            
            var id_content = $(this).attr("data-ltd-href");
            $("[id^=p-and-c]").removeClass("in active show");
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

                            <a data-toggle="tab" data-ltd-href="p-and-c-document" className="ltd-sub nav-link sub-tab-click active"> اطلاعات شخص

                            </a>

                        </li>
                        
                        <li className="ltd-sub nav-item ltd-bg-tab" dir="ltr">

                            <a data-toggle="tab" data-ltd-href="p-and-c-history" className="ltd-sub nav-link sub-tab-click"> تاریخچه تغییرات

                            </a>

                        </li>
                    </ul>

                </div>
                <ReactComment text="end tab title" />

                <ReactComment text="begin tab content" />
                <div id="ltd-sub-content" className="ltd-sub col-12 ltd-tabs tab-content ltd-IRANSans-regular">

                    <div id="p-and-c-document" className="document ltd-sub tab-pane fade sub-content-show in active show ">
                        <ReactComment text="begin content header" />
                        <div>
                            <div className="ltd-sub row">
                                <div className="ltd-sub col-md-3">
                                    <label>نوع شخص</label>
                                    <select className="ltd-sub ltd-0radius form-control font-weight-light ltd-IRANSans-regular" id="CAID" name="CAID">

                                        <option>حقیقی</option>

                                        <option>حقوقی</option>

                                    </select>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label htmlFor="cb1">فعال</label>
                                    <input id="cb1" type="checkbox" value=""/>
                                </div>
                                <div className="ltd-sub col-md-6">									
                                </div>
                            </div>
                            <div className="ltd-sub row">
                                <div className="ltd-sub col-md-3">
                                    <label>کد شخص</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>شماره شناسنامه</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>جنسیت</label>
                                    <select className="ltd-sub ltd-0radius form-control font-weight-light ltd-IRANSans-regular" id="CAID" name="CAID">

                                        <option>مرد</option>

                                        <option>زن</option>

                                    </select>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>وضعیت تاهل</label>
                                    <select className="ltd-sub ltd-0radius form-control font-weight-light ltd-IRANSans-regular" id="CAID" name="CAID">

                                        <option>مجرد</option>

                                        <option>متاهل</option>

                                    </select>
                                </div>
                            </div>
                            <div className="ltd-sub row">
                                <div className="ltd-sub col-md-3">
                                    <label>نام</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>نام پدر</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>ملیت</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>مدرک تحصیلی</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                            </div>
                            <div className="ltd-sub row">
                                <div className="ltd-sub col-md-3">
                                    <label>نام خانوادگی</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>تاریخ تولد</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>تابعیت</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>تلفن همراه</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                            </div>
                            <div className="ltd-sub row">
                                <div className="ltd-sub col-md-3">
                                    <label>کد ملی</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>محل تولد</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>دین</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                                <div className="ltd-sub col-md-3">
                                    <label>پست الکترونیک</label>
                                    <input type="text" className="ltd-sub form-control ltd-0radius input-group-sm"/>
                                </div>
                            </div>
                            <div className="ltd-sub row">
                                <div className="ltd-sub col-md-12">
                                    <label>آدرس</label>
                                </div>
                            </div>
                        </div>
                        <ReactComment text="end content header" />
                        <ReactComment text="begin table" />
                        <div id="table-div" className="ltd-sub mx-1 ">
                            <table className="ltd-sub table table-striped table-bordered table-sm">
                                <tr>
                                    <th>ردیف</th>
                                    <th>عنوان</th>
                                    <th>شهر</th>
                                    <th>آدرس کامل</th>
                                    <th>کد پستی</th>
                                    <th>تلفن</th>
                                    <th>نمابر</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>محل سکونت</td>
                                    <td>بندرعباس</td>
                                    <td>آزادگان - آزادگان 20 - ساختمان داریوش 2 - طبقه 5 - واحد 17</td>
                                    <td>7919914115</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>								
                            </table>
                            <div id="ltd-action-footer" className="ltd-sub row w-100 ltd-bg7">

                                <div className="ltd-sub col-12 w-100 ltd-IRANSans-medium">

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
                        </div>
                        <ReactComment text="end table" />

                    </div>

                    <div id="p-and-c-history" className="history ltd-sub tab-pane fade sub-content-show">

                        123

                    </div>	

                </div>
                <ReactComment text="end tab content" />

            </div>
            <ReactComment text="end document content" />
        </React.Fragment>
    )
}

export default PersonAndCompany
