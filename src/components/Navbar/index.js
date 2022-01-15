import React from 'react';
import { Nav, Link } from './styles';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

export const Navbar = () => {

    const size = '32px'

    return (
        <Nav>
            <Link to='/'><MdHome size={size} /></Link>
            <Link to='/favs'><MdFavoriteBorder size={size} /></Link>
            <Link to='/user'><MdPersonOutline size={size} /></Link>
        </Nav>
    )
}
