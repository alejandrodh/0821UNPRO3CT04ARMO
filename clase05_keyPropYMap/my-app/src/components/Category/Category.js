import React from 'react';

function Category(props){
    console.log(props);
    return(
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {props.category}
                </div>
            </div>
        </div>
    )
}

export default Category;