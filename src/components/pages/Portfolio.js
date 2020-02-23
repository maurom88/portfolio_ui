import React from 'react'

function Portfolio() {
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
                        <div className="col-sm-4">
                            <p>A Long Road</p>
                            <img src="https://picsum.photos/id/563/300/300" alt="Project 1: A Long Road" />
                        </div>
                        <div className="col-sm-4">
                            <p>Reaching the Sky</p>
                            <img src="https://picsum.photos/id/328/300/300" alt="Project 2: Reaching the Sky" />
                        </div>
                        <div className="col-sm-4">
                            <p>Coffee Break</p>
                            <img src="https://picsum.photos/id/431/300/300" alt="Project 3: Coffee Break" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Portfolio