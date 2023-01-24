import React from "react";
import { connect } from "react-redux";
import { getItems, getCurrency, getTotal, removeFromCart } from "../ducks/cart";
import Cart from "../components/Cart/Cart";

const mapStateToProps = (state, props){
 return{
items: getItems(state, props),
currency: getCurrency(state, props),
total: getTotal(state, props)
}
}

const mapDispactchToProps=(dispatch)=>(
  {
    removeFromCart: (id)=> dispatch(removeFromCart(id))
  }
);

export default connect(mapStateToProps, mapDispactchToProps)(Cart)