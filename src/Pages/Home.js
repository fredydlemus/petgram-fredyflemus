import React from 'react';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { ListOfCategories } from '../components/ListOfCategories';
import { useParams } from 'react-router-dom';

import { Layout } from '../components/Layout';

export const Home = () => {

    const params = useParams();

    return (

        <Layout title='your favorite app' subtitle='With pegram you can found photos of animals very beaty'>

            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.id} />
        </Layout>


    )
}

