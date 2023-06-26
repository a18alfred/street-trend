import {useSession} from 'next-auth/client';
import {useRouter} from 'next/dist/client/router';
import React from 'react';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {UserShippingInfo} from '../../types';
import * as Styled from './CheckoutShippingInfo.styles';
import * as yup from 'yup';
import {Form, Formik} from 'formik';
import FormikTextField from '../FormikTextField/FormikTextField';
import Link from 'next/link';
import Button from '../Button/Button';

/**
 *Renders form to collect user shipping information
 *@function CheckoutShippingInfo
 *@returns {JSX.Element} - Rendered CheckoutShippingInfo component
 */

const CheckoutShippingInfo = (): JSX.Element => {
    const router = useRouter();
    const [session] = useSession();

    const {collectCustomerShippingInfo} = useActions();
    const {isLoading, isShippingInfoCollected, userShippingInfo} = useTypedSelector(
        (state) => state.checkout
    );

    const proceedToShipping = () => {
        router.push('/checkout/shipping');
    };

    return (
        <Styled.Container>
            <Formik
                initialValues={{
                    firstName: userShippingInfo?.firstName || '',
                    lastName: userShippingInfo?.lastName || '',
                    email: userShippingInfo?.email || '',
                    address: userShippingInfo?.address || '',
                    city: userShippingInfo?.city || '',
                    country: userShippingInfo?.country || '',
                    state: userShippingInfo?.state || '',
                    zipCode: userShippingInfo?.zipCode || '',
                    phone: userShippingInfo?.phone || '',
                }}
                validationSchema={validationSchema}
                onSubmit={(data) => {
                    // in user is authenticated, get email from session, otherwise get email from local state
                    const userEmail = session !== null ? session.user.email : data.email;
                    // connect all data into userShippingInformation
                    const userShippingInformation: UserShippingInfo = {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: userEmail,
                        city: data.city,
                        address: data.address,
                        country: data.country,
                        state: data.state,
                        zipCode: data.zipCode,
                        phone: data.phone,
                    };

                    // dispatch action to redux
                    collectCustomerShippingInfo(userShippingInformation);

                    // if everything is correct, proceed to shipping stage
                    setTimeout(() => {
                        proceedToShipping();
                    }, 1000);
                }}
            >
                <Form>
                    <Styled.FormControl>
                        {/* FIRST AND LAST NAME */}
                        <FormikTextField
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                        />
                        <FormikTextField
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                        />
                    </Styled.FormControl>
                    {/* EMAIL - will be shown only to unauthorized users, if user is logged-in. Data will be received through session */}
                    {session === null && (
                        <FormikTextField type='email' name='email' placeholder='Email'/>
                    )}
                    {/* ADDRESS */}
                    <FormikTextField type='text' name='address' placeholder='Address'/>
                    {/* CITY */}
                    <FormikTextField type='text' name='city' placeholder='City'/>
                    {/* COUNTRY, STATE AND ZIP-CODE */}
                    <Styled.FormControl>
                        <FormikTextField type='text' name='country' placeholder='Country'/>
                        <FormikTextField type='text' name='state' placeholder='State'/>
                        <FormikTextField
                            type='text'
                            name='zipCode'
                            placeholder='ZIP Code'
                        />
                    </Styled.FormControl>
                    {/* PHONE */}
                    <FormikTextField type='tel' name='phone' placeholder='Phone'/>

                    <Styled.ButtonWrap>
                        <Button
                            text='Continue to shipping'
                            isCompleted={isShippingInfoCollected}
                            isLoading={isLoading}
                            type='submit'
                        />
                        <Link href='/cart' passHref>
                            <Styled.ReturnToCart>Return to cart</Styled.ReturnToCart>
                        </Link>
                    </Styled.ButtonWrap>
                </Form>
            </Formik>
        </Styled.Container>
    );
};

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required('Please add first name')
        .max(25, 'First name cannot exceed 25 symbols'),

    lastName: yup
        .string()
        .required('Please add last name')
        .max(25, 'Last name cannot exceed 25 symbols'),

    // email: yup
    //   .string()
    //   .email('Email is incorrect')
    //   .required('Please add email')
    //   .max(35, 'Email cannot exceed 35 symbols'),

    address: yup
        .string()
        .required('Please add address')
        .max(50, 'Address cannot exceed 50 symbols'),

    city: yup
        .string()
        .required('Please add city')
        .max(25, 'City cannot exceed 25 symbols'),

    country: yup
        .string()
        .required('Please add country')
        .max(25, 'Country cannot exceed 25 symbols'),

    state: yup
        .string()
        .required('Please add state')
        .max(20, 'State cannot exceed 20 symbols'),

    zipCode: yup
        .string()
        .required('Please add zip code')
        .max(15, 'Zip code cannot exceed 15 symbols'),

    // phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    phone: yup
        .string()
        .required('Please add phone number')
        .max(25, 'Phone number cannot exceed 15 symbols'),
});

export default CheckoutShippingInfo;
