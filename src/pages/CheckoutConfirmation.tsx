import { Link } from "react-router-dom";
import { Button } from "../components/Button";



const CheckoutConfirmation = () => {

  return (
    <div className="checkoutconfirmation">
      <div className="checkoutconfirmation__container">
        <h3>Thank you for your order! Your purchase has been confirmed</h3>
        <Link to={"/"}>
          <div className="checkoutconfirmation__container--button">
            <Button>Continue to Homepage</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutConfirmation;
