import React from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout/index';

export const Detail = () => {

    const params = useParams();


    return (
        <Layout title={`Photo ${params.id}`}>
            <PhotoCardWithQuery id={params.id} />
        </Layout>
    )
}
