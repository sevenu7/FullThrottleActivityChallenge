import React from 'react';
import { Button } from 'react-bootstrap';

const Card = (props) => {
    const {data, clicked} = props;
    const {real_name, id} = data;
    return (
        <Button onClick={() => clicked(id)} className="userCard">
            {real_name}
        </Button>
    )
} 

export default Card;