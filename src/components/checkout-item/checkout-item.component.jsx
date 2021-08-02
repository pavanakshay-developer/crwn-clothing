import React from "react";
import { connect } from "react-redux";
import {
  clearFromCart,
  addToCart,
  removeFromCart,
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemContainer,
  CheckOutItemSpan,
  ImageContainer,
  CheckoutItemImage,
  QuantityArrow,
  QuantityValueSpan,
  QuantityItemSpan,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={imageUrl} alt="item" />
      </ImageContainer>
      <CheckOutItemSpan>{name}</CheckOutItemSpan>
      <QuantityItemSpan>
        <QuantityArrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </QuantityArrow>
        <QuantityValueSpan>{quantity}</QuantityValueSpan>
        <QuantityArrow onClick={() => addItem(cartItem)}>
          &#10095;
        </QuantityArrow>
      </QuantityItemSpan>
      <CheckOutItemSpan>${price}</CheckOutItemSpan>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearFromCart(item)),
  addItem: (item) => dispatch(addToCart(item)),
  removeItem: (item) => dispatch(removeFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
