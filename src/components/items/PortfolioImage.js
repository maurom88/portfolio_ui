import React from 'react'

function PortfolioImage(props) {
    return (
        <div className="col-sm-4">
            <h3>{props.title}</h3>
            <img src={props.imgSrc} alt={props.altText} />
        </div>
    )
}

export default PortfolioImage