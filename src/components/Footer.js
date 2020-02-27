import React from 'react'
import data from '../json/data'

const socialMediaList = data.SocialMedias

function Footer() {
    return (
        <footer>
            <ul className="navbar-nav">
                {socialMediaList.map(s => (
                    <li className="nav-item">
                        <a href={s} className="nav-link">{s}</a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer
