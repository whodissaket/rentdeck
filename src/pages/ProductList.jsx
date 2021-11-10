import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import { mobile } from "../responsive";
import { useLocation, useParams } from "react-router";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 20px;
  ${mobile({ marginRight: "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const search =
    location?.search.split("=")[0] == "?s"
      ? location?.search.split("=")[1]
      : null;
  const category =
    location?.search.split("=")[0] == "?categories"
      ? location?.search.split("=")[1]
      : null;

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Categorize by:</FilterText>
          <Select>
            <Option disabled selected>
              All
            </Option>
            <Option>Furniture</Option>
            <Option>Electronics</Option>
            <Option>Kitchen</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} search={search} />
      <Footer />
    </Container>
  );
};

export default ProductList;
