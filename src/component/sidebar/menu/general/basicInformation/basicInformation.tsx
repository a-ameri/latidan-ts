import React from 'react'

const BasicInformation = () =>{

    let personAndCompany = (
        <li data-id="request_list" className="list-group-item list-group-item-action">
            <span className="fas fa-list fa-size">&nbsp;&nbsp;</span><span>معرفی شخص و شرکت</span>
        </li>
    )

    let costCenter = (
        <li data-id="task_list" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>معرفی مرکز هزینه</span>
        </li>
    )

    let project = (
        <li data-id="task_list" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>معرفی پروژه</span>
        </li>
    )

    let branch = (
        <li data-id="task_list" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>معرفی شعبه</span>
        </li>
    )

    let numbringRule = (
        <li data-id="task_list" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>روش شماره گذاری</span>
        </li>
    )

    let geoAreas = (
        <li data-id="task_list" className="list-group-item list-group-item-action">
            <span className="fas fa-list-alt fa-size">&nbsp;&nbsp;</span><span>مناطق جغرافیایی</span>
        </li>
    )

    return(
        <React.Fragment>
             <li data-href="#" data-toggle="collapse" data-target="#ul4-1" className="list-group-item list-group-item-action">
                <span className="fas fa-wrench fa-size">&nbsp;&nbsp;</span><span>اطلاعات پایه</span>
            </li>
            <ul id="ul4-1" className="list-group ltd-0radius p-0 collapse">
                {personAndCompany}
                {costCenter}
                {project}
                {branch}
                {numbringRule}
                {geoAreas}
            </ul>                        
            
        </React.Fragment>
    )
}

export default BasicInformation