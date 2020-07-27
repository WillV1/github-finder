import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import './Alert.css'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <Container>
                    <Row>
                        <Col className="alert-icon">
                        <FontAwesomeIcon icon={faInfoCircle} /> {alert.msg}
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    )

}


export default Alert;