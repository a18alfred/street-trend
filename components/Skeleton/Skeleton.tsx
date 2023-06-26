import React, {useEffect, useState} from 'react';
import ContentLoader from 'react-content-loader';
import * as Styled from './Skeleton.styles';
import {useMediaQuery} from '@react-hook/media-query';
import PageHeader from '../PageHeader/PageHeader';
import {useTypedSelector} from '../../hooks/useTypedSelector';

export interface Props {
    variant: 'productDetails' | 'allProducts' | 'whatsHot';
}

/**
 *Renders different variants of skeleton loaders
 *@function Skeleton
 *@param {enum} variant - skeleton variant ('productDetails' | 'allProducts')
 *@returns {JSX.Element} - Rendered Skeleton component
 */
// https://github.com/danilowoz/react-content-loader
const Skeleton = ({variant}: Props): JSX.Element => {
    const onMobileWidth = useMediaQuery('only screen and (max-width: 768px)');
    const [fullWidth, setFullWidth] = useState(1500);
    const [fullHeight, setFullHeight] = useState(576);
    const viewBoxParams = `0 0 ${fullWidth} ${fullHeight}`;
    const {theme} = useTypedSelector((state) => state.ui);

    const backgroundColor = theme === 'dark' ? '#1B1D23' : '#F3F5F6';
    const foregroundColor = theme === 'dark' ? '#141416' : 'rgba(117, 124, 142, 0.15)';

    useEffect(() => {
        setFullWidth(window.innerWidth);
        setFullHeight(window.innerHeight);
    }, []);

    /**
     *@PRODUCT-DETAILS-PAGE Skeleton loader
     */
    if (variant === 'productDetails') {
        if (onMobileWidth) {
            return (
                <ContentLoader
                    speed={3}
                    width={'100%'}
                    height={'100%'}
                    viewBox={viewBoxParams}
                    backgroundColor={backgroundColor}
                    foregroundColor={foregroundColor}
                >
                    <rect
                        x='0'
                        y='0'
                        rx='24'
                        ry='24'
                        width={'100%'}
                        height='400'
                    />
                    <rect
                        x='0'
                        y='416'
                        rx='24'
                        ry='24'
                        width={'100%'}
                        height='300'
                    />
                </ContentLoader>
            );
        }
        return (
            <Styled.Container>
                <ContentLoader
                    speed={3}
                    width={'100%'}
                    height={'100%'}
                    viewBox={viewBoxParams}
                    backgroundColor={backgroundColor}
                    foregroundColor={foregroundColor}
                >
                    <rect
                        x='0'
                        y='0'
                        rx='24'
                        ry='24'
                        width={'48%'}
                        height='454'
                    />
                    <rect
                        x={'50%'}
                        y='0'
                        rx='24'
                        ry='24'
                        width={'50%'}
                        height='454'
                    />
                    <rect
                        x='0'
                        y='470'
                        rx='24'
                        ry='24'
                        width={'100%'}
                        height='200'
                    />
                </ContentLoader>
            </Styled.Container>
        );
    }
    /**
     *@ALL-PRODUCTS-PAGE Skeleton loader
     */
    if (variant === 'allProducts') {
        if (onMobileWidth) {
            return (
                <ContentLoader
                    speed={3}
                    width={'100%'}
                    height={'100%'}
                    viewBox={viewBoxParams}
                    backgroundColor={backgroundColor}
                    foregroundColor={foregroundColor}
                >
                    <rect
                        x='0'
                        y='0'
                        rx='24'
                        ry='24'
                        width={'100%'}
                        height='400'
                    />
                    <rect
                        x='0'
                        y='416'
                        rx='24'
                        ry='24'
                        width={'100%'}
                        height='300'
                    />
                </ContentLoader>
            );
        }
        return (
            <Styled.Container>
                <ContentLoader
                    speed={3}
                    width={'100%'}
                    height={'100%'}
                    viewBox={viewBoxParams}
                    backgroundColor={backgroundColor}
                    foregroundColor={foregroundColor}
                >
                    <rect x='0' y='0' rx='24' ry='24' width={'25%'} height={'200px'}/>
                    <rect x={'27%'} y='0' rx='24' ry='24' width={'73%'} height='80'/>
                    <rect x={'27%'} y='96' rx='24' ry='24' width={'73%'} height={'60%'}/>
                </ContentLoader>
            </Styled.Container>
        );
    }
    /**
     *@LANDING-PAGE-WHATS-HOT-SECTION Skeleton loader
     */
    return (
        <Styled.WhatsHotSectionSkeleton>
            <PageHeader headerText={`What's hot! 🔥`}/>
            <ContentLoader
                speed={3}
                width={'100%'}
                height={fullHeight}
                backgroundColor={backgroundColor}
                foregroundColor={foregroundColor}
            >
                <rect
                    x='0'
                    y='0'
                    rx='24'
                    ry='24'
                    width={'100%'}
                    height={fullHeight / 1.7}
                />
            </ContentLoader>
        </Styled.WhatsHotSectionSkeleton>
    );
};

export default Skeleton;
