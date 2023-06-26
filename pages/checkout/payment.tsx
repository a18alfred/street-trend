import React from 'react';
import CheckoutLayout from '../../components/CheckoutLayout/CheckoutLayout';
import CheckoutPayment from '../../components/CheckoutPayment/CheckoutPayment';
import {GetServerSideProps} from 'next';
import {getSession} from 'next-auth/client';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession({req: context.req});

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return {
        props: {session},
    };
};
export default function CheckoutPaymentPage(): JSX.Element {
    return (
        <CheckoutLayout title='Payment | Street Trend'>
            <CheckoutPayment/>
        </CheckoutLayout>
    );
}
