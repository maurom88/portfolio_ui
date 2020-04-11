import React, { useState } from 'react'
import PortfolioImage from '../items/PortfolioImage'

function Portfolio() {
    const [projects, setProjects] = useState([])

    const url = "http://localhost:9000/portfolio"

    fetch(url, {
        method: 'GET'
    })
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json()
        })
        .then(function (data) {
            setProjects(data)
        })
        .catch(err => {
            console.log('caught it!', err)
        })

    return (
        <main>
            <div className="row my-3">
                <div className="col-sm-12 text-center">
                    <h2>Portfolio</h2>
                </div>
            </div>

            <section>
                <div className="container portfolio">
                    <div className="row my-3">
                        {projects.map(project =>
                            <PortfolioImage key={project.ProjectID} title={project.Title} imgSrc={project.Image} altText={project.Descr} />)}
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="container portfolio">
                    <div className="row my-3">
                        <PortfolioImage title="A Long Road" imgSrc="https://picsum.photos/id/563/300/300" altText="Project: A Long Road" />
                        <PortfolioImage title="Reaching the Sky" imgSrc="https://picsum.photos/id/328/300/300" altText="Project: Reaching the Sky" />
                        <PortfolioImage title="Coffee Break" imgSrc="https://picsum.photos/id/431/300/300" altText="Project: Coffee Break" />
                    </div>
                </div>
            </section> */}

        </main>
    )
}

export default Portfolio