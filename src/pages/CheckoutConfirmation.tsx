import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const CheckoutConfirmation = () => {
const { setShowCheckout } = useContext(CartContext);
const closeCheckout = () => {
  setShowCheckout(false);
};


  return (
    <div className="checkoutconfirmation">
      <div className="checkoutconfirmation__container">
        <h3>Thank you for your order! Your purchase has been confirmed</h3>
        <Link to={"/"}>
          <div className="checkoutconfirmation__container--button" onClick={closeCheckout}>
            <Button>Continue to Homepage</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutConfirmation;
