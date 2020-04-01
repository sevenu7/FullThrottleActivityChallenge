import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';

import ActivityPeriod from './ActivityPeriod';

const ActivityModal = ({id, show, closed}) => {
    const [date, setDate] = useState();

    const modalStyle = {
        display: show ? 'block' : 'none'
    }

    const datePickHandler = (e) => {
        setDate(e.target.value)
    }

    return (
        id ? <div className="modal" style={modalStyle}>
            <div className="modalContent">
                <button type="button" className="closeButton" onClick={closed}/>
                <div >
                    <ActivityPeriod id={id} date={date}/>
                </div>
                <div className="datePick">
                    <input type="date" onChange={datePickHandler} />
                </div>
            </div>
        </div> : null
    )
} 

export default ActivityModal;