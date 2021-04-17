import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const PaymentForm = ({handlePaymentSuccess}) => {

    const [PaymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const elements = useElements();
    const stripe = useStripe();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
            handlePaymentSuccess(paymentMethod.id);
            
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement />
            <br/>
            <button className="btn btn-success" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            PaymentError && <p style={{color:'red'}}>{PaymentError}</p>
        }
        {
            paymentSuccess && <p style={{color:'green'}}>your payment is successful</p>
        }
        </div>
    );
};

export default PaymentForm;