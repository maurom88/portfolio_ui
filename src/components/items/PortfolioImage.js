import React from 'react'

function PortfolioImage(props) {
    return (
        <div className="col-sm-4">
            <p>{props.title}</p>
            <img src={props.imgSrc} alt={props.altText} />
        </div>
    )
}

export default PortfolioImage