import React, { Component } from 'react';
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
