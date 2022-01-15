import React from 'react';
import { Anchor, Image } from './styles';
import { Link } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
    <Link to={path}>
        <Image src={cover} />
        {emoji}
    </Link>
)