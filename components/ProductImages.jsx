import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const BigImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const ImageButtons = styled.div`
  display: flex;
  align-items: center;
  gap:15px;
  justify-content: space-between;
  flex-grow: 0;
  margin-top: 10px;
`;
const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `
      border-color: #ccc;
    `
      : `
      border-color: transparent;
    `}
  height: 60px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;
const BigImageWrapper = styled.div`
  text-align: center;
`;

const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image
              src={
                image ||
                "https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"
              }
              alt=""
            />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
};

export default ProductImages;
