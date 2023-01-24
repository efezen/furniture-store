import { Connect } from "react-redux";
import Product from "../components/Product/Product";
import { addToCart, isInCart, removeFromCart } from "../ducks/cart";

const mapStateToProps = (state, props) => {
  return {
    isInCart: isInCart(state, props),
  };
};

const mapDispactchToProps = (dispatch) => {
  addToCart: id = dispatch(addToCart(id));
  removeFromCart: (id) => dispatch(removeFromCart());
};

export default connect(mapStateToProps, mapDispactchToProps)(Product);
