import React from 'react'
import './RequestCard.css'

function RequestCard(props) {
    return (
        <div className="request-card">
            <div className="type-date">
                <div>{props.data.request_type_i18n}</div>
                <div>{props.data.request.created_time}</div>
            </div>

            <div className="emp-info">
            <div className="emp-info-info">
                <div>{props.data.employee.id}</div>
                <img src={props.data.employee.avatar} alt="" />
                <div>{props.data.name}</div>
             </div>
             <div className="status-container">{props.data.status_i18n}</div>
            </div>

            <div>
                <input type="button" value="View Details" />
            </div>
        </div>
    )
}

export default RequestCard
