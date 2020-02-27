import React from 'react'
import PortfolioImage from '../items/PortfolioImage'

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
                        <PortfolioImage title="A Long Road" imgSrc="https://picsum.photos/id/563/300/300" altText="Project 1: A Long Road" />
                        <PortfolioImage title="Reaching the Sky" imgSrc="https://picsum.photos/id/328/300/300" altText="Project 1: A Long Road" />
                        <PortfolioImage title="Coffee Break" imgSrc="https://picsum.photos/id/431/300/300" altText="Project 1: A Long Road" />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Portfolio