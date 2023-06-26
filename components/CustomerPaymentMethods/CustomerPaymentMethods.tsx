import React from 'react';
import CreditCard from '../CreditCard/CreditCard';
import * as Styled from './CustomerPaymentMethods.styles';

interface Props {
    customerName: string;
    customerImg: string;
}

const CustomerPaymentMethods = ({
                                    customerName,
                                    customerImg,
                                }: Props): JSX.Element => {
    return (
        <Styled.Container>
            <CreditCard
                cardHolderName={customerName}
                cardNumber={'1111 2222 3333 4444'}
                cardHolderImd={customerImg}
            />
        </Styled.Container>
    );
};

export default CustomerPaymentMethods;
