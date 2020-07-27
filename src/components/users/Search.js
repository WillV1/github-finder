import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Search.css';
import Proptypes from 'prop-types';

class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: Proptypes.func.isRequired,
        clearUsers: Proptypes.func.isRequired,
        showClear: Proptypes.bool.isRequired,
        setAlert: Proptypes.func.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter name', 'light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })


    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Control id="inline" type="text" name="text"
                                    placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
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
}

export default Search;