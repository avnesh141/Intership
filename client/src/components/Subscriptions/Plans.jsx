import React from 'react'
import './Plans.css'

function Plans() {
    return (
        <div className="pricing1 py-5 bg-light">
            <div className="containerCards">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h3 className="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
                        <h6 className="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
                    </div>
                </div>
                <div className="PlanCardsDiv">
                     {/* <div className="PlanCard">
                        <div className="card text-center card-shadow on-hover border-0 mb-4">
                            <div className="card-body font-14">
                                <h5 className="mt-3 mb-1 font-weight-medium">Basic</h5>
                                <h6 className="subtitle font-weight-normal">For New Candidates</h6>
                                <div className="pricing my-3">
                                    <sup>₹</sup>
                                    <span className="monthly display-5">Free</span>
                                </div>
                                <ul className="list-inline">
                                    <li className="d-block py-2">Perfect to start with</li>
                                    <li className="d-block py-2">One Internship or Job</li>
                                    <li className="d-block py-2">&nbsp;</li>
                                    <li className="d-block py-2">&nbsp;</li>
                                    <li className="d-block py-2">&nbsp;</li>
                                    <li className="d-block py-2">&nbsp;</li>
                                </ul>
                                <div className="bottom-btn">
                                    <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
                                </div>
                            </div>
                        </div> 
                    </div> */}
                    <div className="PlanCard">
                        <div className="card text-center card-shadow on-hover border-0 mb-4">
                            <div className="card-body font-14">
                                <span className="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">Popular</span>
                                <h5 className="mt-3 mb-1 font-weight-medium">BRONZE</h5>
                                <h6 className="subtitle font-weight-normal">For Candidates with Experience</h6>
                                <div className="pricing my-3">
                                    <sup>₹</sup>
                                    <span className="monthly display-5">100</span>
                                    <small className="monthly">/mo</small>
                                </div>
                                <ul className="list-inline">
                                    <li className="d-block py-2">Best plan for beginners</li>
                                    <li className="d-block py-2">Recieve Invoice</li>
                                    <li className="d-block py-2">Apply for 3 Internships or Jobs</li>
                                    <li className="d-block py-2">&nbsp;</li>
                                    <li className="d-block py-2">&nbsp;</li>
                                </ul>
                                <div className="bottom-btn">
                                    <a className="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="PlanCard">
                        <div className="card text-center card-shadow on-hover border-0 mb-4">
                            <div className="card-body font-14">
                                <h5 className="mt-3 mb-1 font-weight-medium">SILVER</h5>
                                <h6 className="subtitle font-weight-normal">Best For an Expert</h6>
                                <div className="pricing my-3">
                                    <sup>₹</sup>
                                    <span className="monthly display-5">300</span>
                                    <small className="monthly">/mo</small>
                                </div>
                                <ul className="list-inline">
                                    <li className="d-block py-2">Perfect for an Experinced Candidate</li>
                                    <li className="d-block py-2">Faster reply</li>
                                    <li className="d-block py-2">Apply 5 InernShips</li>
                                    <li className="d-block py-2">Direct Contact to HR</li>
                                    <li className="d-block py-2">Manage Your applications</li>
]                                </ul>
                                <div className="bottom-btn">
                                    <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="PlanCard">
                        <div className="card text-center card-shadow on-hover border-0 mb-4">
                            <div className="card-body font-14">
                                <h5 className="mt-3 mb-1 font-weight-medium">GOLD</h5>
                                <h6 className="subtitle font-weight-normal">InternNet Special Plan</h6>
                                <div className="pricing my-3">
                                    <sup>₹</sup>
                                    <span className="monthly display-5">1000</span>
                                    <small className="monthly">/mo</small>
                                </div>
                                <ul className="list-inline">
                                <li className="d-block py-2">Perfect for an Experinced Candidate</li>
                                    <li className="d-block py-2">Faster reply</li>
                                    <li className="d-block py-2">Apply Unlimited times</li>
                                    <li className="d-block py-2">Direct Contact to HR</li>
                                    <li className="d-block py-2">Manage Your applications</li>
                                    <li className="d-block py-2">InternNet Exclusive Membership</li>
                                </ul>
                                <div className="bottom-btn">
                                    <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans