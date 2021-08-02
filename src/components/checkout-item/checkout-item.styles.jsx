import styled, { css } from "styled-components";

const spanStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckOutItemSpan = styled.span`
  ${spanStyles}
`;

export const QuantityItemSpan = styled(CheckOutItemSpan)`
  display: flex;
`;

export const QuantityArrow = styled.div`
  cursor: pointer;
`;

export const QuantityValueSpan = styled.span`
  margin: 0 15px;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
