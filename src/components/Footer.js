import React from 'react'
import data from '../json/data'
import ListLink from '../components/items/ListLink'

const socialMediaList = data.SocialMedias

function Footer() {
    return (
        <footer>
            <ul className="nav navbar-nav">
                {socialMediaList.map(s => (
                    <ListLink key={s.id} classNameLi="nav-item" classNameA="nav-link" name={s.name} url={s.url} />
                ))}
            </ul>
        </footer>
    )
}

export default Footer
