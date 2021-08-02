import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripePublishableKey = "pk_test_kkzvH1GgbighubLhkVh1YEIt";

  const saveToken = (token) => {
    console.log("Stripe Token: ", JSON.stringify(token));
    alert("Payment successful!");
  };

  return (
    <StripeCheckout
      token={saveToken}
      stripeKey={stripePublishableKey}
      amount={priceForStripe}
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
    />
  );
};

export default StripeCheckoutButton;
