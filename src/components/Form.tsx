import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Form = () => {
  const { setCartItems } = useContext(CartContext);

  const handleCompleteOrder = () => {
    setCartItems([])

  }
  return (
    <div className="form__container">
      <h3>Delivery information</h3>
      <form>
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Lastname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Zip code" />
      </form>
      <NavLink to={"/checkoutconfirmation"}>
        <div className="button" onClick={handleCompleteOrder}>
          <Button>Complete order</Button>
        </div>
      </NavLink>
    </div>
  );
};
