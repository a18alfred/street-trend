import React, {useCallback, useState} from 'react';
import FormCheckboxField from '../FormCheckboxField/FormCheckboxField';
import FormTextField from '../FormTextField/FormTextField';
import PaymentMethodIcon from '../PaymentMethodIcon/PaymentMethodIcon';
import * as Styled from './PaymentSection.styles';

/**
 *Renders PaymentMethods in the final step of process checkout
 *@function PaymentSection
 *@returns {JSX.Element} - Rendered PaymentSection component
 */

const PaymentSection = (): JSX.Element => {
    const [isCreditCardSelected, setIsCreditCardSelected] =
        useState<boolean>(true);
    const [isApplePaySelected, setIsApplePaySelected] = useState<boolean>(false);
    const [isGooglePaySelected, setIsGooglePaySelected] = useState<boolean>(false);
    const [creditCardNumber, setCreditCardNumber] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [expirationDate, setExpirationDate] = useState<string>('');
    const [securityCode, setSecurityCode] = useState<string>('');

    const selectCreditCard = useCallback(() => {
        setIsCreditCardSelected(true);
        setIsApplePaySelected(false);
        setIsGooglePaySelected(false);
    }, []);
    const selectApplePay = useCallback(() => {
        setIsApplePaySelected(true);
        setIsCreditCardSelected(false);
        setIsGooglePaySelected(false);
    }, []);
    const selectGooglePay = useCallback(() => {
        setIsGooglePaySelected(true);
        setIsApplePaySelected(false);
        setIsCreditCardSelected(false);
    }, []);

    return (
        <Styled.Container>
            <Styled.FormControl>
                <FormCheckboxField
                    checked={isCreditCardSelected}
                    setChecked={selectCreditCard}
                    name='credit__card'
                    labelText='Pay with Credit Card'
                />

                <Styled.CreditCardProviders>
                    <PaymentMethodIcon
                        iconSrc='/images/payment-icons/visa.svg'
                        iconAlt='visa'
                    />
                    <PaymentMethodIcon
                        iconSrc='/images/payment-icons/master.svg'
                        iconAlt='master'
                    />
                    <PaymentMethodIcon
                        iconSrc='/images/payment-icons/amex.svg'
                        iconAlt='visa'
                    />
                </Styled.CreditCardProviders>
            </Styled.FormControl>
            {isCreditCardSelected && (
                <Styled.CreditCardSection>
                    <FormTextField
                        name='card__number'
                        placeholder='Card Number'
                        value={creditCardNumber}
                        setValue={setCreditCardNumber}
                        type='tel'
                        required={true}
                    />
                    <FormTextField
                        name='name'
                        placeholder='Name on Card'
                        value={name}
                        setValue={setName}
                        type='text'
                        required={true}
                    />
                    <Styled.FormTextControl>
                        <FormTextField
                            name='expiration__date'
                            placeholder='Exp Date (MM/YY)'
                            value={expirationDate}
                            setValue={setExpirationDate}
                            type='text'
                            required={true}
                        />
                        <FormTextField
                            name='security__code'
                            placeholder='Security Code'
                            value={securityCode}
                            setValue={setSecurityCode}
                            type='text'
                            required={true}
                        />
                    </Styled.FormTextControl>
                </Styled.CreditCardSection>
            )}

            <Styled.FormControl>
                <FormCheckboxField
                    checked={isApplePaySelected}
                    setChecked={selectApplePay}
                    name='apple_pay'
                    labelText='Pay with Apple Pay'
                />

                <PaymentMethodIcon
                    iconSrc='/images/payment-icons/apple-pay.svg'
                    iconAlt='apple pay'
                />
            </Styled.FormControl>

            <Styled.FormControl>
                <FormCheckboxField
                    checked={isGooglePaySelected}
                    setChecked={selectGooglePay}
                    name='google_pay'
                    labelText='Pay with Google Pay'
                />

                <PaymentMethodIcon
                    iconSrc='/images/payment-icons/google-pay.svg'
                    iconAlt='google pay'
                />
            </Styled.FormControl>
        </Styled.Container>
    );
};

export default PaymentSection;
