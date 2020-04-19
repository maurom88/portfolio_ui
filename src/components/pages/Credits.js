import React from 'react'

function Credits() {
    return (
        <main className="container">
            <div className="row my-3">
                <div className="col-sm-12 text-center">
                    <h2>Credits</h2>
                </div>
            </div>

            <ul className="creditsList">
                <li className="my-3">Background Photo by <a href="https://unsplash.com/@jakobowens1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jakob Owens</a> on <a href="https://unsplash.com/backgrounds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
                <li className="my-3">Thanks to <a href="https://jessicaoukes.ca/">Jessica Oukes</a> for design ideas and suggestions.</li>
            </ul>
        </main>
    )
}

export default Credits