import React, {useState} from 'react';
import NavMiniModal from '../NavMiniModal/NavMiniModal';
import SortingOptions from '../SortingOptions/SortingOptions';
import * as Styled from './GridControl.styles';
import {MdFormatListBulleted, MdGridOn} from 'react-icons/md';
import CardHeader from '../CardHeader/CardHeader';

export interface Props {
    header: string;
    productAmount: number;
    changeLayout: (val: 'grid' | 'vertical') => void;
}

/**
 * Responsible for sorting products, changing layout mode, showing quantity of products and products per page on <AllProductsPage/>
 *@function GridControl
 *@param {string} header - Grid control header
 *@param {number} productAmount - amount of displayed products
 *@param {function} changeLayout - will change layout mode to 'grid' or 'vertical'
 *@returns {JSX.Element} - Rendered GridControl component
 */
const GridControl = ({
                         header,
                         productAmount,
                         changeLayout,
                     }: Props): JSX.Element => {
    // sort type will be displayed to user, has no corresponding logic
    const [sortType, setSortType] = useState<string>('Price, Low to High');

    // Sort modal controls
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleSortModal = () => setIsModalOpen((prev) => !prev);
    // TODO:PAGINATION on backend and frontend

    return (
        <Styled.Container>
            <CardHeader headerText={header}/>
            <p className='product__amount'>Found {productAmount} products</p>

            <Styled.SortWrapper onClick={toggleSortModal} className='sort'>
                Sort by: <span>{sortType}</span>
                <NavMiniModal
                    isOpen={isModalOpen}
                    modalWidth='180px'
                    right='-4rem'
                    top='3rem'
                    animationVariant={'slideIn'}
                    modalContent={<SortingOptions setSortType={setSortType}/>}
                />
            </Styled.SortWrapper>

            <Styled.IconContainer>
                <p>View</p>
                <MdGridOn className='icon' onClick={() => changeLayout('grid')}/>
                <MdFormatListBulleted
                    className='icon icon-list'
                    onClick={() => changeLayout('vertical')}
                />
            </Styled.IconContainer>
        </Styled.Container>
    );
};
export default GridControl;
