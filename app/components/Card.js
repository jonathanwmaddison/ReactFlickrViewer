import React, { Component } from 'react';
import { Thumbnail, Col } from 'react-bootstrap'; 
import styles from '../styles.css';

export default class Card extends Component {
    render() {
        const { photo } = this.props;
        return (
                <a  href={photo.link}>
                    <img className='img-fluid' src={photo.media.m} />
                    <div className='info'>
                        <p className='card-text'>Photo by {photo.author.match(/"(.*?)"/)[1]}</p>
                    </div>
                </a>
        )
    }

}
