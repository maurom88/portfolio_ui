import React from 'react'

function ListLink(props) {
    return (
        <div className={props.classNameLi}>
            <a className={props.classNameA} href={props.url}>{props.name}</a>
        </div>
    )
}

export default ListLink