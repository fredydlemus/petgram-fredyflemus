import React from 'react';
import { FavsWithQuery } from '../container/GetFavorites';
import { Layout } from '../components/Layout';

const Favs = () => {
    return (
        <Layout title={'your favorites'} subtitle={'Here you can found your favorites'}>

            <h1>
                Esto es favs
            </h1>
            <FavsWithQuery />
        </Layout>
    )
}

export default Favs;