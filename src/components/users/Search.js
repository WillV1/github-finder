import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Search.css';
import Proptypes from 'prop-types';

const Search =( searchUsers, showClear, clearUsers, setAlert) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter name', 'light')
        } else {
            searchUsers(text);
            setText('');
        }
    }

    const onChange = (e) => setText(e.target.value )


        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <Form onSubmit={onSubmit}>
                                <Form.Control id="inline" type="text" name="text"
                                    placeholder="Search Users..." value={text} onChange={onChange} />
                                <Button id="search-button" variant="dark" type="submit" block>Search</Button>
                                {showClear && <Button id="clear-button" variant="light" type="submit" onClick={clearUsers} block>Clear</Button>}
                            </Form>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </div>
        )
}

Search.propTypes = {
    searchUsers: Proptypes.func.isRequired,
    clearUsers: Proptypes.func.isRequired,
    showClear: Proptypes.bool.isRequired,
    setAlert: Proptypes.func.isRequired
}

export default Search;