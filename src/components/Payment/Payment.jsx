import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import "./Payment.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.

const promise = loadStripe(
  "pk_test_51Hw8omAFjvuOhmpP8r2GkrfRJ1nImw1IHoT7Wsp1nPxuPMhB62V2lKL0tB8izdcRTG45RxDN3iYEHKpZb8WALVtA00WUAU57hF"
);

export default function App(props) {
  console.log("props.tableNumber in Payment", props.tableNumber);
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm
          tableNumber={props.tableNumber}
          changeToPaid={props.changeToPaid}
        />
      </Elements>
    </div>
  );
}
