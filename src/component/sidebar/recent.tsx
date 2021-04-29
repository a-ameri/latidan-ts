import React from 'react'
const Recent = () =>{


    return(
        <React.Fragment>
            <div id="recent-menu" className=" mt-3 sidebar-obj  ltd-IRANSans-light">
                <ul className="list-group ltd-0radius p-0">
                    <li data-href="#" className="list-group-item list-group-item-action text-center"
                        data-toggle="collapse" data-target="#recent-menu-add">صفحات به تازگی بازدید شده
                    </li>
                    <ul id="recent-menu-add" className="list-group ltd-0radius p-0 collapse show"></ul>	
                </ul> 
            </div>
        </React.Fragment>
    )
}

export default Recent