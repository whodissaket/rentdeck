import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSelect = styled.select`
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 20px;
  cursor: pointer;
`;

const FilterOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1.5px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #f8f4f8;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="/products/electronics_1.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>MacBook</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            pellentesque pulvinar pellentesque habitant morbi tristique.
            Praesent elementum facilisis leo vel fringilla est ullamcorper eget.
            Mauris pharetra et ultrices neque. Sollicitudin nibh sit amet
            commodo nulla facilisi nullam.
          </Desc>
          <Price>Rs.900/month</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Variant:</FilterTitle>
              <FilterSelect>
                <FilterOption>8gb + 256gb</FilterOption>
                <FilterOption>8gb + 500gb</FilterOption>
                <FilterOption>16gb + 500gb</FilterOption>
              </FilterSelect>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;