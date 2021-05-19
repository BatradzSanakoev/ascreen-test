import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom';

import mountains from '../../utils/data';
import MountainPage from '../MountainPage/MountainPage'

export default function Main() {
    const location = useLocation();
    return (
        <>
            <main className={`${location.pathname === '/' ? 'main' : 'visible'}`}>
                <Link to='/mountains' className='link'/>
            </main>
            <Route path='/mountains'>
                <MountainPage name={mountains.name} images={mountains.images} text={mountains.text} />
            </Route>
        </>
    )
}