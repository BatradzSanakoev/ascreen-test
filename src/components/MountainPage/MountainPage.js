/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';

import selIcon from '../../images/mselected.png';
import icon from '../../images/m.png';
import ball from '../../images/ball.png';
import ballSel from '../../images/ballSel.png';

export default function MountainPage({ id, name, images, text }) {
    // Стейт переменная для смены состояния кнопки слайдера
    const [selected, setSelected] = React.useState(0);

    // Метод отображения картинки в полноэкранном режиме
    const handleImgClick = () => {
        document.querySelector('.mountainPage__image').classList.toggle('fullscreen');
        document.querySelector('.mountainPage__info').classList.toggle('visible');
    };

    // Метод работы слайдера
    const handleSlider = (num) => {
        document.querySelector('.image').src = images[num];
        setSelected(num);
    };

    return (
        <div className='mountainPage'>
            <div className='mountainPage__image'>
                <img src={images[0]} className='image' alt='main-wallpaper' />
                <div className='image__down'>
                    <Link to='/' className='back' />
                    <div className='image__slider'>
                        {/* Как и в компоненте Main, здесь все кнопки слайдера прописаны вручную из-за малого количества данных
                     При большой выборке можно будет процесс автоматизировать, использовав, например, цикл                     */}
                        <img src={selected === 0 ? ballSel : ball} alt='controls' onClick={() => handleSlider(0)} />
                        <img src={selected === 1 ? ballSel : ball} alt='controls' onClick={() => handleSlider(1)} />
                        <img src={selected === 2 ? ballSel : ball} alt='controls' onClick={() => handleSlider(2)} />
                    </div>
                    <Link to='#' className='full' onClick={handleImgClick} />
                </div>
            </div>
            <div className='mountainPage__info'>
                <div className='mountainPage__text'>
                    <h2 className='text__name'>{name}</h2>
                    <div className='text'>
                        <p className='text__paragraph'>{text[0]}</p>
                        <p className='text__paragraph'>{text[1]}</p>
                    </div>
                    <div className='text__icons'>
                        {/* Тут также как и ранее все иконки гор написаны вручную из-за малого количества данных, 
                         при большем количестве вывод можно реализовать использовав, например, метод map */}
                        <img src={id === 1 ? selIcon : icon} alt='mountain-icon' />
                        <img src={id === 2 ? selIcon : icon} alt='mountain-icon' />
                        <img src={id === 3 ? selIcon : icon} alt='mountain-icon' />
                        <img src={id === 4 ? selIcon : icon} alt='mountain-icon' />
                        <img src={id === 5 ? selIcon : icon} alt='mountain-icon' />
                        <img src={id === 6 ? selIcon : icon} alt='mountain-icon' />
                        <img src={id === 7 ? selIcon : icon} alt='mountain-icon' />
                        <img src={id === 8 ? selIcon : icon} alt='mountain-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}