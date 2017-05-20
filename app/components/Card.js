import React, { Component } from 'react';
import { Thumbnail, Col } from 'react-bootstrap'; 

export default class Card extends Component {
    render() {
        return (
            <Col xs={6} md={4}>
                <Thumbnail src={this.props.photo.media.m} alt="242x200"/>
            </Col>
        )
    }

}
