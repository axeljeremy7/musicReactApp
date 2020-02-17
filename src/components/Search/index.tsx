import React from "react";
import styled from "styled-components";

interface Props {}

const Input = styled.input`
  border-radius: 12px;
  border-width: 0;
  padding: 8px;
  margin: 0;
  color: #313131;
  background: white;
  outline: 0;
  height: 32px;
  line-height: 12px;
  font-size: 12px;
  width: 200px;
`;

const Search: React.FC<Props> = () => {
  return <Input placeholder="Search ..." name="search" type="text" maxLength={255}/>;
};

export default Search;
