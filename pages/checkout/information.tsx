import React from 'react';
import CheckoutInformation from '../../components/CheckoutInformation/CheckoutInformation';
import CheckoutLayout from '../../components/CheckoutLayout/CheckoutLayout';
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
export default function CheckoutInformationPage(): JSX.Element {
    return (
        <CheckoutLayout title='Checkout'>
            <CheckoutInformation/>
        </CheckoutLayout>
    );
}
