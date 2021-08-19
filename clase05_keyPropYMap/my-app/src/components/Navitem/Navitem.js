import React from 'react';

function Navitem(props){
    return(
            <li className="nav-item">
				<a className="nav-link" href="/">
                   <i className={`fas fa-fw ${props.dataItem.icono}`}></i>
                    <span>{props.dataItem.menu}</span>
                </a>
			</li>        
    )
}

export default Navitem;