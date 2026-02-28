import React from "react";
import S from "./style";

const Categories = ({ categories, handleCategoryOnClick }) => {
  const categoryList = categories.map(({id, count,label}) => (
    <li>
      <S.Category data-category={id} onClick={handleCategoryOnClick}>
        {label} <S.CategoryCount>{count}</S.CategoryCount>
      </S.Category>
    </li>
  ));
  return (
    <S.Categories>
      {categoryList}
    </S.Categories>
  );
};

export default Categories;
