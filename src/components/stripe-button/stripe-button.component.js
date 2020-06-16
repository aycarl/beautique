import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51GuWObG0jnY5wpQDqNwI74aCaW6dAx5S4YIkPDp6dvqFQgF8vj6RVCR8bBAu11QJzjkHDNUhxxzhhWqo8kQBqcZJ00PueCQ67b";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  }

  return (
    <StripeCheckout 
      label="Pay now"
      name="beautique"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;