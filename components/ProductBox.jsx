import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 100px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: -5px;
  background-color: #fff;
  padding: 5px 15px 15px 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
  }
`;

const ProductBox = ({ _id, title, description, price, images }) => {
  const dispatch = useDispatch();
  const url = `/product/${_id}`;

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img
            src={
              images?.[0] ||
              "https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"
            }
            alt=""
          />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <PriceRow>
          <Title href={url}>{title}</Title>
          <Price>${price}</Price>
        </PriceRow>
        <Button onClick={() => dispatch(addProduct(_id))} primary outline style={{marginTop:"10px"}}>
          <CartIcon />
          Add to cart
        </Button>
      </ProductInfoBox>
    </ProductWrapper>
  );
};

export default ProductBox;
