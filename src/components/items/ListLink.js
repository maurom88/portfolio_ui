import React from 'react'

function ListLink(props) {
    return (
        <li className={props.classNameLi}>
            <a className={props.classNameA} href={props.url}>{props.name}</a>
        </li>
    )
}

export default ListLink