import React from 'react';

function Service(props) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="card-text">{props.title}</p>
                </div>
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225">
                    <rect width="100%" height="100%" fill="#55595c" />
                </svg>
            </div>
        </div>
    )
}

export default Service