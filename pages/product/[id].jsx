import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

const ColWrapper = styled.div`
  display: grid;
  height:65vh;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 80px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div style={{ padding: "50px 0" }}>
        <Center>
          <ColWrapper>
            <WhiteBox>
              <ProductImages images={product.images} />
            </WhiteBox>
            <div style={{paddingBottom:"100px"}}>
              <Title>{product.title}</Title>
              <p style={{marginTop:"30px", color:"#606060", lineHeight:"25px"}}>{product.description}</p>
              <PriceRow>
                <div>
                  <Price>
                    <b>Rs.{product.price}</b>
                  </Price>
                </div>
                <div>
                  <Button
                    black
                    onClick={() => dispatch(addProduct(product._id))}
                  >
                    <CartIcon />
                    Add to cart
                  </Button>
                </div>
              </PriceRow>
            </div>
          </ColWrapper>
        </Center>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
