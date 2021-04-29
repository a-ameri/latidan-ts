import React from 'react'

const BasicInformation = () =>{

    let personAndCompany = (
        <li data-id="person_and_company" className="list-group-item list-group-item-action">
            <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>معرفی شخص و شرکت</span>
        </li>
    )

    let costCenter = (
        <li data-id="cost_center" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>معرفی مرکز هزینه</span>
        </li>
    )

    let project = (
        <li data-id="project" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>معرفی پروژه</span>
        </li>
    )

    let branch = (
        <li data-id="branch" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>معرفی شعبه</span>
        </li>
    )

    let numberingRule = (
        <li data-id="numbering_rule" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>روش شماره گذاری</span>
        </li>
    )

    let geoAreas = (
        <li data-id="geo_areas" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>مناطق جغرافیایی</span>
        </li>
    )

    return(
        <React.Fragment>
             <li data-href="#" data-toggle="collapse" data-target="#general_basic" className="list-group-item list-group-item-action">
                <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>اطلاعات پایه</span>
            </li>
            <ul id="general_basic" className="list-group ltd-0radius p-0 collapse">
                {personAndCompany}
                {costCenter}
                {project}
                {branch}
                {numberingRule}
                {geoAreas}
            </ul>                        
            
        </React.Fragment>
    )
}

export default BasicInformation