import React from "react";
import S from "./style";

const Categories = ({ categories, handleCategoryOnClick, selected }) => {

  const categoryList = categories.map(({ id, count, label }, i) => (
    <li key={i}>
      <S.Category
        $isSelected={selected === id}
        data-category={id}
        onClick={() => handleCategoryOnClick(id)}
      >
        {label} <S.CategoryCount>{count}</S.CategoryCount>
      </S.Category>
    </li>
  ));
  
  return <S.Categories>{categoryList}</S.Categories>;
};

export default Categories;
