import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import mselected from '../../images/mselected.png';
import m from '../../images/m.png';
import back from '../../images/back.png';
import full from '../../images/full.png';
import ball from '../../images/ball.png';
import ballSel from '../../images/ballSel.png';

export default function MountainPage({ name, images, text }) {
    return (
        <div className='mountainPage'>
            <div className='mountainPage__image'>
                <img src={images[0]} className='image' />
                <div className='image__down'>
                    <Link to='/' className='back' />
                    <div className='image__slider'>
                        <img src={ballSel} />
                        <img src={ball} />
                        <img src={ball} />
                    </div>
                    <Link to='/' className='full' />
                </div>
            </div>
            <div className='mountainPage__info'>
                <div className='mountainPage__text'>
                    <h2 className='text__name'>{name}</h2>
                    <p className='text__paragraph'>{text[0]}</p>
                    <p className='text__paragraph'>{text[1]}</p>
                    <div className='text__img'>
                        <img src={mselected} />
                        <img src={m} />
                        <img src={m} />
                        <img src={m} />
                        <img src={m} />
                        <img src={m} />
                        <img src={m} />
                        <img src={m} />
                    </div>
                </div>
            </div>
        </div>
    )
}