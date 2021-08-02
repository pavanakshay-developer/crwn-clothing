import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import {
  CollectionFooterContainer,
  CollectionItemContainer,
  CollectionItemImageContainer,
  CustomButtonContainer,
  NameSpan,
  PriceSpan,
} from "./collection-item.styles";

const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>${price}</PriceSpan>
      </CollectionFooterContainer>
      <CustomButtonContainer onClick={() => addToCart(item)} inverted>
        ADD TO CART
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
