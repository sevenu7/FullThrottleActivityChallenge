import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import userData from './userData.json';
import Card from './Card';
import ActivityModal from './ActivityModal';

const Users = () => {
    const [userId, setUserId] = useState(null);
    const [show, setShow] = useState(false);
    const {members} = userData;
    // console.log(userData);
    const clickHandler = (id) => {
        setUserId(id);
        setShow(true);
    }

    const closeHandler = () => {
        setShow(false);
    }

    return (
        <Container fluid>
            <Container>
                <Row>
                    <ActivityModal id={userId} show={show} closed={closeHandler}/>
                    {members.map((member) => (
                        <Col sm={6} md={6} lg={6} xl={6} key={member.id} className="userColumn">
                            <Card data={member} clicked={clickHandler}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
} 

export default Users;