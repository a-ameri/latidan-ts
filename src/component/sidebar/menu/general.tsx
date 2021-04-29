import React from 'react'
import BasicInformation from './general/basicInformation/basicInformation'

const General = () =>{

    let security = (
        <li data-id="security" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>امنیت</span>
        </li>
    )

    let appSetting = (
        <li data-id="app_setting" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>تنظیمات نرم افزار</span>
        </li>
    )

    let themeSetting = (
        <li data-id="theme_setting" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>تنظیمات نمایه</span>
        </li>
    )

    let importExport = (
        <li data-id="import_export" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>ارسال و دریافت داده</span>
        </li>
    )

    let messages = (
        <li data-id="messages" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>پیام ها</span>
        </li>
    )

    let aboutUs = (
        <li data-id="about_us" className="list-group-item list-group-item-action">
            <span className="fab fa-usb fa-size">&nbsp;&nbsp;</span><span>درباره ما</span>
        </li>
    )

    return(
        <React.Fragment>
            <li data-href="#" data-toggle="collapse" data-target="#general" className="list-group-item list-group-item-action">
                <span className="fas fa-exchange fa-size">&nbsp;&nbsp;</span><span>عمومی</span>
            </li>
            <ul id="general" className="list-group thm-0radius p-0 collapse">
                <BasicInformation />
                {security}
                {appSetting}
                {themeSetting}
                {importExport}
                {messages}
                {aboutUs}
            </ul>                        
            
        </React.Fragment>
    )
}

export default General