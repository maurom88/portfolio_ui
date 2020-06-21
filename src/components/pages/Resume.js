import React, { useState, useEffect } from 'react'
import Job from '../items/Job'
import fetchFunc from '../items/fetchFunc'

function Resume() {
    const [jobs, setJobs] = useState([])

    const url = process.env.REACT_APP_API + "/resume"

    useEffect(() => {
        fetch(url)
        .then(response => fetchFunc.handleResponse(response))
        .then(data => setJobs(data))
        .catch(err => fetchFunc.handleError(err))
    }, [])


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