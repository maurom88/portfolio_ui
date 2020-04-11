import React from 'react'

function Job(props) {
    return (
        <article className="row justify-content-center my-3 border-bottom">
            <div className="col-sm-6">
                
                <h3>{props.title}</h3>
                <p>{props.employer}</p>
                <p>
                    {props.start} - {props.end === null ? "Present" : props.end}<br />
                    {props.city}, {props.country}
                </p>
                {/* <h4>Duties and Responsibilities:</h4>
                <ul>
                    <li></li>
                </ul> */}
            </div>
        </article>
    )
}

export default Job