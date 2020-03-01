import React from 'react'
import data from '../json/data'
import ListLink from '../components/items/ListLink'

const socialMediaList = data.SocialMedias

function Footer() {
    return (
        <footer>
            <nav
                className="nav navbar-expand-sm bg-color-5 navbar-light"
                style={{
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                <ul className="navbar-nav">
                    {/* Shows a list of social media links, coming from a json file */}
                    {/* ListLink takes classNameLi and classNameA as props, because it is a list element with an anchor inside of it */}
                    {socialMediaList.map(s => (
                        < ListLink key={s.id} classNameLi="nav-item" classNameA="nav-link" name={s.name} url={s.url} />
                    ))}
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
