import React, {useState, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

import './Search.css';

const Search =() => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);    
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter name', 'light')
        } else {
            githubContext.searchUsers(text);
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
                                {githubContext.users.length > 0 && <Button id="clear-button" variant="light" type="submit" onClick={githubContext.clearUsers} block>Clear</Button>}
                            </Form>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </div>
        )
}

export default Search;