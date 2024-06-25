import React, { memo, useState } from "react";
import { Search } from "../../icons/search";
import {
  SearchContainer,
  SearchTextInput,
  PlaceholderColor,
} from "./productsStyled";

const SearchInputComponent = ({ style, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SearchContainer style={style} isFocused={isFocused}>
      <Search />
      <SearchTextInput
        {...props}
        placeholderTextColor={PlaceholderColor.color}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </SearchContainer>
  );
};

export const SearchInput = memo(SearchInputComponent);
