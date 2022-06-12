import React from 'react'

const PortfolioSteps = (props) => {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active' : ''}>Personal Details</div>
            <div className={props.step2 ? 'active' : ''}>Skills</div>
            <div className={props.step3 ? 'active' : ''}>All Links</div>
            <div className={props.step4 ? 'active' : ''}>Services</div>
        </div>
    )
}

export default PortfolioSteps
