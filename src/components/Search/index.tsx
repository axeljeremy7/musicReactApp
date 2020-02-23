import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";
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
  const {dispatch} = useContext(SearchContext);
  let history = useHistory();
  const onKeyDownHandler = useCallback(e => {
    var value = e.target.value;
    if (e.key === "Enter" && value && value.trim().length !== 0) {
      dispatch({type:'setSearchValue', searchValue: value.trim() })
      history.push('/Search');
    }
  }, []);

  return (
    <Input
      placeholder="Search ..."
      name="search"
      type="text"
      maxLength={255}
      onKeyDown={onKeyDownHandler}
    />
  );
};

export default Search;
