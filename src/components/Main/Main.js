/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom';

import mountains from '../../utils/data';
import MountainPage from '../MountainPage/MountainPage'

export default function Main() {
    const location = useLocation();

    return (
        <>
            {/* Каждая "Гора" представлена в виде ссылки  */}
            <main className={`${location.pathname === '/' ? 'main' : 'visible'}`}>
                <Link to='/mountains/m1' className='mountain-link first' />
                <Link to='/mountains/m2' className='mountain-link second' />
                <Link to='/mountains/m3' className='mountain-link third' />
                <Link to='/mountains/m4' className='mountain-link fourth' />
                <Link to='/mountains/m5' className='mountain-link fifth' />
                <Link to='/mountains/m6' className='mountain-link sixth' />
                <Link to='/mountains/m7' className='mountain-link seventh' />
                <Link to='/mountains/m8' className='mountain-link eighth' />
            </main>

            {/* Расписанные маршруты для перехода на страницы каждой "Горы". При переходе на ту или иную страницу компоненту MountainPage передаются данные "Горы"
             В данном случае из-за малого кол-ва данных все компоненты и маршруты прописаны вручную, но при большем количестве маршрутов можно будет все заполнить, 
             используя, к примеру цикл */}
            <Route path='/mountains/m1'>
                <MountainPage id={mountains.m1.id} name={mountains.m1.name} images={mountains.m1.images} text={mountains.m1.text} />
            </Route>
            <Route path='/mountains/m2'>
                <MountainPage id={mountains.m2.id} name={mountains.m2.name} images={mountains.m2.images} text={mountains.m2.text} />
            </Route>
            <Route path='/mountains/m3'>
                <MountainPage id={mountains.m3.id} name={mountains.m3.name} images={mountains.m3.images} text={mountains.m3.text} />
            </Route>
            <Route path='/mountains/m4'>
                <MountainPage id={mountains.m4.id} name={mountains.m4.name} images={mountains.m4.images} text={mountains.m4.text} />
            </Route>
            <Route path='/mountains/m5'>
                <MountainPage id={mountains.m5.id} name={mountains.m5.name} images={mountains.m5.images} text={mountains.m5.text} />
            </Route>
            <Route path='/mountains/m6'>
                <MountainPage id={mountains.m6.id} name={mountains.m6.name} images={mountains.m6.images} text={mountains.m6.text} />
            </Route>
            <Route path='/mountains/m7'>
                <MountainPage id={mountains.m7.id} name={mountains.m7.name} images={mountains.m7.images} text={mountains.m7.text} />
            </Route>
            <Route path='/mountains/m8'>
                <MountainPage id={mountains.m8.id} name={mountains.m8.name} images={mountains.m8.images} text={mountains.m8.text} />
            </Route>
        </>
    )
}