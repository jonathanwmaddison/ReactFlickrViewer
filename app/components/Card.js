/*eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.css';

export default class Card extends Component {
    render() {
        const { img, text, link } = this.props;
        return (
                <a href={link}>
                    <img className='img-fluid' src={img} />
                    <div className='info'>
                        <p className='card-text'>{text}</p>
                    </div>
                </a>
        )
    }
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string, 
    link: PropTypes.string
}
