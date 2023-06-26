import React from 'react';
import CheckoutLayout from '../../components/CheckoutLayout/CheckoutLayout';
import CheckoutShipping from '../../components/CheckoutShipping/CheckoutShipping';
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
export default function CheckoutShippingPage(): JSX.Element {
    return (
        <CheckoutLayout title='Shipping'>
            <CheckoutShipping/>
        </CheckoutLayout>
    );
}
