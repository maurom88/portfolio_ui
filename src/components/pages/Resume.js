import React from 'react'

function Resume() {
    return (
        <main>
            <div className="row my-3">
                <div className="col-sm-12 text-center">
                    <h2>Work Experience</h2>
                </div>
            </div>

            <div className="container">
                <section>
                    <div className="row my-3">
                        <div className="col-sm-12">

                            {/* Each experience in a different <article> */}

                            <article className="row justify-content-center my-3 border-bottom">
                                <div className="col-sm-6">
                                    <h3>Personal Assistant and Interpreter</h3>
                                    <p>Big Eye Machine, Inc.</p>
                                    <p>
                                        Feb 2018 - Present<br />
                                        Toronto, Canada
                                    </p>
                                    <h4>Duties and Responsibilities:</h4>
                                    <ul>
                                        <li>Interpreting for the business owner (English - Italian) during phone calls and business meetings</li>
                                        <li>Keeping the agenda updated</li>
                                        <li>Booking appointments with clients and suppliers</li>
                                        <li>Placing orders with suppliers</li>
                                    </ul>
                                </div>
                            </article>

                            <article className="row justify-content-center my-3 border-bottom">
                                <div className="col-sm-6">
                                    <h3>IT Consultant</h3>
                                    <p>Self-employed</p>
                                    <p>
                                        Jan 2014 - Oct 2017<br />
                                        Alessandria, Italy
                                    </p>
                                    <h4>Duties and Responsibilities:</h4>
                                    <ul>
                                        <li>Clients assistance over the phone, remotely and in person</li>
                                        <li>On-site visits with clients, reviewing and analyzing their issues to determine their needs and expectations</li>
                                        <li>Troubleshooting and technical problems resolution</li>
                                    </ul>
                                </div>
                            </article>

                            <article className="row justify-content-center my-3 border-bottom">
                                <div className="col-sm-6">
                                    <h3>Training Project Manager</h3>
                                    <p>Elledue, Llc</p>
                                    <p>
                                        May 2014 - May 2017<br />
                                        Casale Monferrato, Italy
                                    </p>
                                    <h4>Duties and Responsibilities:</h4>
                                    <ul>
                                        <li>Acted as a liaison between the HR and IT offices in order to implement the new HR software and migrate the data from competitor platforms</li>
                                        <li>Data analysis and manipulations using MS Excel</li>
                                        <li>Periodic reports preparation for internal and external use</li>
                                    </ul>
                                </div>
                            </article>

                            <article className="row justify-content-center my-3 border-bottom">
                                <div className="col-sm-6">
                                    <h3>IT Instructor</h3>
                                    <p>Orizzonti dell'Est e dell'Ovest</p>
                                    <p>
                                        Sep 2010 - Dec 2-13<br />
                                        Trieste, FTT
                                    </p>
                                    <h4>Duties and Responsibilities:</h4>
                                    <ul>
                                        <li>Delivered training in class and followed-up in person or on-line</li>
                                        <li>Identified learning outcomes</li>
                                        <li>Created and evaluated training and materials</li>
                                        <li>Developed and administered exams and assessments</li>
                                    </ul>
                                </div>
                            </article>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Resume