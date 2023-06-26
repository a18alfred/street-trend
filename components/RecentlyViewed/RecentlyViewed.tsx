import React from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import PageHeader from '../PageHeader/PageHeader';
import * as Styled from './RecentlyViewed.styles';
import CarouselCard from '../CarouselCard/CarouselCard';

/**
 *Renders recently viewed products by user
 *@function RecentlyViewed
 *@returns {JSX.Element} - Rendered RecentlyViewed component or null if there is no user has no stored products in local storage
 */
const RecentlyViewed = (): JSX.Element | null => {
    const {viewedProducts} = useTypedSelector((state) => state.recentlyViewed);

    // if there is no viewed products, return early
    if (viewedProducts.length === 0) return null;

    return (
        <>
            <PageHeader headerText='recently viewed'/>
            <Styled.Container>
                {viewedProducts.map((product) => (
                    <CarouselCard
                        key={product._id}
                        carouselItem={product}
                    />
                ))}
            </Styled.Container>
        </>
    );
};

export default RecentlyViewed;
