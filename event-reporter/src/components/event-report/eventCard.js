import React from 'react';
// import './HowToList.css';
import { Link } from 'react-router-dom'
const HowToCard = (props) => {
    return(
        <div className='howtocard'>
            <h2>{props.EventReport.event_name} <span className='delete' onClick={() => {props.deleteCard(props.EventReport.id)}}>X</span></h2>
            <Link to={`${props.EventReport.id}/edit`}><h4 className='author'>{props.EventReport.event_host}</h4></Link>
            <Link to={`${props.EventReport.id}/edit`}><p>{props.EventReport.event_date}</p></Link>
        </div>
    )
}
export default HowToCard;