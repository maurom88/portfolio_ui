import React, { useState } from 'react'

import Job from '../items/Job'

function Resume() {
    const [jobs, setJobs] = useState([])

    const url = "http://localhost:9000/resume"

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
            setJobs(data)
        })
        .catch(err => {
            console.log('caught it!', err)
        })

    return (
        <main>
            <div className="row my-3">
                <div className="col-sm-12 text-center">
                    <h2>Work Experience</h2>
                </div>
            </div>

            {/* <div className="container">
                <section>
                    <div className="row my-3">
                        <div className="col-sm=12">

                        </div>
                    </div>
                </section>
            </div> */}

            <div className="container">
                <section>
                    <div className="row my-3">
                        <div className="col-sm-12">
                            {jobs.map(job =>
                                <Job key={job.JobID} start={job.StartDate} end={job.EndDate} title={job.Title} employer={job.Employer} city={job.City} country={job.Country} />)}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Resume