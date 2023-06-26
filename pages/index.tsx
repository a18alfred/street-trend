import React, {useEffect} from 'react';
import Layout from '../components/Layout/Layout';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';
import LandingPage from '../views/LandingPage/LandingPage';

export default function Home(): JSX.Element {
    const {loadAllProducts} = useActions();
    const {products, isLoading} = useTypedSelector((state) => state.products);

    useEffect(() => {
        if (!products.length) {
            loadAllProducts();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout
            title={'Street Trend | Buy the hottest shoes'}
        >
            <LandingPage products={products} areProductsLoading={isLoading}/>
        </Layout>
    );
}
