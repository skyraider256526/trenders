import React from "react";
import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_JPm2xL7odi0OaF87tsfraWiz00lwfmXvED";
  const onToken = token => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment, please use the provided credit cards"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Trenders Ltd."
      image="http://svgshare.com/i/CUz.svg"
      billingAddress
      shippingAddress
      stripeKey={publishableKey}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
